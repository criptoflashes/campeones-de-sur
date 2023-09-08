import Link from 'next/link';

function CardAdminProducts({ product }) {

  return (
    <Link href={`/adminProducts/${product._id}`}>
      <div className="bg-gray-400 text-white rounded-md hover:cursor-pointer hover:bg-gray-700 flex flex-wrap justify-center ">
       
        {product.imageUrl && (<img src={product.imageUrl} className='w-full rounded-t-lg'  />)}
        <div className='p-4 '>
        <h1 className='text-lg font-bold'>{product.title}</h1>
      
        <h2 className='text-2xl'>{product.category}</h2>

        <h2 className='text-sm'>{product.description}</h2>
        </div>

      </div>
    </Link>
  )
}

export default CardAdminProducts
