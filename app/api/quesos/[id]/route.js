import { NextResponse } from "next/server";
import { connectDb } from "@/utils/mongooseConn";
import  Product  from '@/models/products';

export async function GET(request, {params}){
    console.log(params)
    connectDb()

    const product = await Product.find()
    return NextResponse.json({product
    })
}

export function DELETE(request, { params }){
    return NextResponse.json({
        message: `Eliminando queso ${params.id}`
    })

}

export function PUT(request, { params }){
    return NextResponse.json({
        message: `Actualizando queso ${params.id}`
    })

}