
/* "use client" */
import { connectDb } from "../../utils/mongooseConn"
import Product from "../../models/products"
import CardAdminProducts from "../../components/CardAdminProducts"
/* import { useState } from "react" */

async function loadProducts() {
  await connectDb()
  const productResponse = await Product.find()
  return productResponse
  /*  const res = await fetch('http://localhost:3000/api/quesos')
   const data = await res.json()
   console.log(data)
   return data */
}

export const dynamic = 'force-dynamic';

export default async function DashboardCardContainer() {

  /*  const[allProducts, setAllProducts] = useState({})  */
  const showProducts = await loadProducts()
  /* setAllProducts({showProducts}) */
  console.log("show", showProducts[0].title)
  return (
    <div className="grid grid-cols-4 grid-rows-auto gap-4">
      {/* {JSON.stringify(showProducts)}  */}
      {showProducts.map(product => (
        <CardAdminProducts product={product} key={product._id} />

      ))

      }   
    </div>
  )
}


