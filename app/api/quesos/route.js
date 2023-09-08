require('dotenv').config();
import Product from "../../../models/products";
import { NextResponse } from "next/server";
import { connectDb } from "../../../utils/mongooseConn";
import { unlink } from "fs/promises";
import { processImage } from "@/libs/processImage";
import {v2 as cloudinary} from 'cloudinary';


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
    const image = data.get("image")

    const title = data.get("title");
    const category = data.get("category");
    const description = data.get("description");

   //save image to local
    const buffer = await processImage(image)

   
   //upload photos to cloudinary
const res =  await cloudinary.uploader.upload(buffer)
console.log("cloudy", res)

const imageUrl = res.secure_url

console.log(title, category, description, imageUrl, "infoo")

 
    

    const newProduct = new Product({title, category, description, imageUrl  });
    const savedProduct = await newProduct.save();
     console.log("este", savedProduct); 



    return NextResponse.json({
      message: "El producto ha sido creado",
      title: data.get("title"),
      category: data.get("category"),
      description: data.get("description"),
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
