
import Image from 'next/image'

function CardProductsDetail({ oneProduct
}) {

  return (

    <div
      className="block rounded-lg  dark:bg-neutral-400 lg:w-5/12  sm:w-full relative  shadow-xl shadow-sky-400/60">

      {oneProduct.imageUrl && (
        <Image
          src={oneProduct.imageUrl}
          className=" mx-auto rounded-t-lg w-1/2 h-1/8 py-2 border-8 radius-2"
          alt=""   
          width="0"
          height="0"
          sizes="100vW"
         
          style={{
            objectFit: 'cover',
          }}
       

        />
      )}

      <div
        class="p-2 text-center">
        <h1 className=" text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 ">{oneProduct.title}</h1>
      </div>



      <div className="p-4 mx-3">
        <h2 className="text-lg text-slate-100 text-justify indent-8 ">{oneProduct.description}</h2>
      </div>




    </div>
  );
}
export default CardProductsDetail