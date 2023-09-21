import React from 'react'
import DashboardCardContainer from '@/app/adminProducts/page'
import Link from 'next/link';
import CardAdminProducts from '@/components/CardAdminProducts';


function ShowAllProducts({ showProducts }) {
    console.log("todoslosproductos", showProducts)
    return (
        <div
            className="bg-gray-400 text-white rounded-md hover:cursor-pointer hover:bg-gray-700 my-8"
        /*  href={`/adminProducts/${product._id}`} */
        >
            {/*       <div className="relative">
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            className="w-full h-48 object-cover rounded-t-lg"
            alt=""
          />
        )}
        <div className="p-4">
          <h1 className="text-lg font-bold">{product.title}</h1>
          <h2 className="text-2xl">{product.category}</h2>
          <h2 className="text-sm text-slate-600">{product.description}</h2>
        </div>
      </div> */}

            <CardAdminProducts />
        </div>
    );
}

export default ShowAllProducts
