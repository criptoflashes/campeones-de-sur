require("dotenv").config();
import Product from "../../../models/products";
import { NextResponse } from "next/server";
import { connectDb } from "../../../utils/mongooseConn";
import { processImage } from "@/libs/processImage";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export async function GET() {
  await connectDb();
  try {
    const product = await Product.find();
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function POST(request) {
  await connectDb();
  try {
    const data = await request.formData();
    const image = data.get("image");

    const title = data.get("title");
    const category = data.get("category");
    const description = data.get("description");

    //save image to local

    if (!image) {
      return NextResponse.json("no se ha subido ninguna imagen", {
        status: 400,
      });
    }

    const buffer = await processImage(image);
    const response = await uploadImageToCloudinary(buffer);
   
    const newProduct = await new Product({
      title,
      category,
      description,
      imageUrl: response.secure_url,
    });
    const savedProduct = await newProduct.save();
    /*  console.log("este", savedProduct);  */

    return NextResponse.json({
      message: "El producto ha sido creado",
      title: data.get("title"),
      category: data.get("category"),
      description: data.get("description"),
      imageUrl: response.secure_url,
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 402,
    });
  }
}
async function uploadImageToCloudinary(buffer) {
  try {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({ resource_type: "image" }, async (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }).end(buffer);
    });
  } catch (error) {
    console.error("Error al subir la imagen a Cloudinary:", error);
    return { errMsg: `this error ${error.message} ` }
    
  }
}





