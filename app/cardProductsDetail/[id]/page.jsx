"use client"

import CardProductsDetail from "@/components/CardProductsDetail"
import { useParams } from "next/navigation"

import { useEffect, useState } from "react"


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
    <div className="flex justify-center my-4 px-1">
      <CardProductsDetail oneProduct={oneProduct} />
    </div>
  )
}

export default ShowOneProduct

