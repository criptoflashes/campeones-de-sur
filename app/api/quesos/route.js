import { NextResponse } from "next/server";
import { connectDb } from "@/utils/mongooseConn";
import Product from "@/models/products";

export async function GET(request, { params }) {
  console.log(params);
  connectDb();

  const product = await Product.find();

}

export  async function POST(request,) {
    const data = await request.json()
 const newProduct = new Product(data)
 const savedTask = await newProduct.save()
 console.log(savedTask)



 return NextResponse.json({
   message: "El producto ha sido creado",
 })
}
