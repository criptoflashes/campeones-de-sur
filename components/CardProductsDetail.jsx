
import Image from 'next/image'

function CardProductsDetail({ oneProduct
}) {

  return (

    <div
      className="block rounded-lg  dark:bg-neutral-400 lg:w-5/12  sm:w-full relative">

      {oneProduct.imageUrl && (
        <Image
          src={oneProduct.imageUrl}
          className=" mx-auto rounded-t-lg w-1/2 h-1/8 "
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