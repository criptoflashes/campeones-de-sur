import Product from "../../../models/products";
import { NextResponse } from "next/server";
import { connectDb } from "../../../utils/mongooseConn";


export async function GET() {
   await connectDb();
  try{
    const product = await Product.find();
    return NextResponse.json(product)
  }catch(error){
    return NextResponse.json(error.message, {
      status: 400,
    });
  }

 
}



export async function POST(request) {
  await connectDb();
  try {
    
    const body = await request.json();
    const newProduct = new Product(body);
    const savedProduct = await newProduct.save();
    console.log(savedProduct);

    return NextResponse.json({
      message: "El producto ha sido creado",
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
