"use client"

import CardProductsDetail from "@/components/CardProductsDetail"
import { useParams } from "next/navigation"

import { useEffect, useState } from "react"
import WhatsArrows from "@/components/WhatsArrows"


function ShowOneProduct() {

  const params = useParams()

  let [oneProduct, setOneProduct] = useState({
    title: "",
    category: "",
    description: "",
    imageUrl: ""
  })

  const getProduct = async () => {
    const res = await fetch(`/api/products/${params.id}`)
    const data = await res.json()

    console.log("DATA ID Product", data)
    setOneProduct({
      title: data.productFound.title,
      description: data.productFound.description,
      category: data.productFound.category,
      imageUrl: data.productFound.imageUrl

    })
  }
  useEffect(() => {

    if (params.id) {
      getProduct()
    }
  }, [])

  return (

    <div>
      <div className="flex justify-center my-4 px-1 ">
        <CardProductsDetail oneProduct={oneProduct} />
      </div>

      <div className=" flex  place-content-center  bg-yellow-100">
        <ul>

          <li className="text-center pt-5 ">
            <h2 className="text-2xl text-slate-600 text-wrap text-balance ">Para pedir y ver más productos, comunicate con nosotros!</h2>
          </li>

          <li className="flex justify-center pb-4">
            <WhatsArrows />

          </li>
        </ul>
      </div>
    </div>
  )
}

export default ShowOneProduct

