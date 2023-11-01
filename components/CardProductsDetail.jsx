


function CardProductsDetail({ oneProduct
 }) {
    
  return (

    <div
      className="bg-gray-400 text-white rounded-md bg-gray-700 my-1">

      <div
        class="border-b-4 border-neutral-100 px-6 py-3 my-6 dark:border-neutral-300 dark:text-neutral-50">
        <h1 className="text-lg font-bold ">{oneProduct.title}</h1>
      </div>

      <div className="relative ">
        {oneProduct.imageUrl && (
          <img
            src={oneProduct.imageUrl}
            className="w-full h-48 object-cover "
            alt=""
          />
        )}
        <div className="p-4">
          <h2 className="text-lg text-slate-100">{oneProduct.description}</h2>
        </div>
      </div>



    </div>
  );
}
export default CardProductsDetail