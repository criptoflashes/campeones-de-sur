

import { connectDb } from "../../utils/mongooseConn"
import Product from "../../models/products"
import CardAdminProducts from "../../components/CardAdminProducts"



async function loadProducts() {
  connectDb()
  const productResponse = await Product.find()
  return productResponse
}



async function DashboardCardContainer() {
  const showProducts = await loadProducts()
  return (
    <div className= "grid md:grid-cols-3 gap-2 ">
       {JSON.stringify(showProducts)} 
        {showProducts.map(product => (
        <CardAdminProducts product={product} key={product._id}/>
      ))}  
    </div>
  )
}

export default DashboardCardContainer
