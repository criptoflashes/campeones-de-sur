import Product from "../../../../models/products";
import { NextResponse } from "next/server";
import { connectDb } from "../../../../utils/mongooseConn";
import cloudinary from "@/libs/cloudinaryConn";
import { processImage } from "@/libs/processImage";

export async function GET(request, { params }) {
  console.log(params);
  await connectDb();
  try {
    const productFound = await Product.findById(params.id);
    if (!productFound) {
      return NextResponse.json(
        { message: "Producto no encontrado" },
        { status: 404 }
      );
    }
    return NextResponse.json({ productFound });
  } catch (error) {
    return NextResponse.json(error.message, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  await connectDb();
  try {
    const productDeleted = await Product.findByIdAndDelete(params.id);

    if (!productDeleted) {
      return NextResponse.json("Producto no encontrado", {
        status: 404,
      });
    }

    return NextResponse.json({
      message: "Eliminando producto",
      productDeleted,
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {
  await connectDb();

  try {
    const data = await request.formData();
    const image = data.get("image");
    const updateData = {
      title: data.get("title"),
      category: data.get("category"),
      description: data.get("description"),
    };
    const title = data.get("title");
    const category = data.get("category");
    const description = data.get("description");

    if (!data.get("title")) {
      return NextResponse.json(
        {
          message: "title is required",
        },
        { status: 400 }
      );
    }

    if (image) {
      async function processImage(image) {
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);
  
        return buffer;
      }


      const buffer = await processImage(image);
      const response = await uploadImageToCloudinary(buffer);


      /* add imageUrl property to the updateData object */
      updateData.imageUrl = response.secure_url;

      /* console.log("updateData", updateData); */
      // new: true returns actualized data
      const productUpdatedWithImage = await Product.findByIdAndUpdate(
        params.id,
        {
          new: true,

          title,
          category,
          description,
          imageUrl: response.secure_url,
        }
      );

      return NextResponse.json({
        productUpdatedWithImage,
      });
    } else {
      const productUpdated = await Product.findByIdAndUpdate(params.id, {
        new: true,

        title,
        category,
        description,
      });
      return NextResponse.json({
        productUpdated,
      });
    }
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}



async function uploadImageToCloudinary(buffer) {
  try {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ resource_type: "image" }, async (err, result) => {
          if (err) {
            reject({ statusCode: 500, error: err.message });
          } else {
            resolve(result);
          }
        })
        .end(buffer);
    });
  } catch (error) {
    console.log("Error al subir la imagen a Cloudinary:", error);
    /* return { errMsg: `this error ${error.message} ` } */
    throw error;
  }
}