import { NextResponse } from "next/server";
import { connectDb } from "../../../utils/mongooseConn";
import Product from "../../../models/products";

export async function GET(request, { params }) {
  console.log(params);
  connectDb();
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
  connectDb();
  try {
    
    const data = await request.json();
    const newProduct = new Product(data);
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
