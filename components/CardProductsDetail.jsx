


function CardProductsDetail({ oneProduct
}) {

  return (

    <div
      className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:w-9/12  sm:w-full ">

      {oneProduct.imageUrl && (
        <img
          src={oneProduct.imageUrl}
          className=" mx-auto rounded-t-lg "
          alt=""
        />
      )}

      <div
        class="p-6 text-center">
        <h1 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 ">{oneProduct.title}</h1>
      </div>



      <div className="p-4">
        <h2 className="text-lg text-slate-100">{oneProduct.description}</h2>
      </div>




    </div>
  );
}
export default CardProductsDetail