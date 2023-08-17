

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
    <div>
      {/* {JSON.stringify(showProducts)} */}
        {showProducts.map(product => (
        <CardAdminProducts product={product} key={product._id}></CardAdminProducts>
      ))}  
    </div>
  )
}

export default DashboardCardContainer
