import Product from "../../../../models/products";
import { NextResponse } from "next/server";
import { connectDb } from "../../../../utils/mongooseConn";


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
      message: "Eliminando producto", productDeleted,
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {
  const body = await request.json();
 await connectDb();
  try {
  
    // new: true returns actualized data
    const productUpdated = await Product.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    return NextResponse.json({
      productUpdated,
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
