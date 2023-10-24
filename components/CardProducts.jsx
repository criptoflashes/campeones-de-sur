import Link from 'next/link';


function CardProducts({ product }) {
  return (
    /*     <Link
          className="bg-gray-400 text-white rounded-md hover:cursor-pointer hover:bg-gray-700 my-1"
          href={`/adminProducts/${product._id}`}
        > */
    <div
      className="bg-gray-400 text-white rounded-md hover:cursor-pointer hover:bg-gray-700 my-1">

      <div
        class="border-b-4 border-neutral-100 px-6 py-3 my-6 dark:border-neutral-300 dark:text-neutral-50">
        <h1 className="text-lg font-bold ">{product.title}</h1>
      </div>

      <div className="relative ">
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            className="w-full h-48 object-cover "
            alt=""
          />
        )}
        <div className="p-4">
          {/* <h1 className="text-lg font-bold">{product.title}</h1> */}
          {/* <h2 className="text-2xl">{product.category}</h2> */}
          <h2 className="text-lg text-slate-100">{product.description}</h2>
        </div>
      </div>

    </div>
  );
}
export default CardProducts
