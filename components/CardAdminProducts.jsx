import Link from 'next/link';

function CardAdminProducts({ product }) {

  return (
    <Link href= {`/adminProducts/${product._id}`}>
    <div className="bg-gray-400 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
      
      <h2>{product.category}</h2>
      <h2>{product.title}</h2>
      <h2>{product.description}</h2>
    </div>
    </Link>
  )
}

export default CardAdminProducts
