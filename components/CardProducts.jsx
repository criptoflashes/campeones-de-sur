"use client"
import Link from 'next/link';
import Image from 'next/image'
import {useState} from "react"

function CardProducts({ product }) {

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };



  return (

    <div


      className="bg-gray-500 text-white rounded-md hover:cursor-pointer hover:bg-gray-700 my-1  shadow-xl shadow-sky-400/60 card glass h-50 ">
      <Link href={`/cardProductsDetail/${product._id}`}>



        <div
          class=" border-b-4 border-neutral-100 px-6 py-3 my-1 dark:border-neutral-300 dark:text-neutral-50">
          <h1 className="text-lg font-bold ">{product.title}</h1>
        </div>

        <figure className="relative ">
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              className="object-none h-auto w-9/12 hover:object-scale-down rounded-xl"
              alt=""
              width="0"
              height="0"
              sizes="80vh"
            /* fill={true} */
            />
          )}
        </figure>

        <div
          className="border-b-4 border-neutral-100 px-6  my-1 dark:border-neutral-300 dark:text-neutral-50" >
        </div>


        <div className={`border-b-4 border-neutral-100 px-6  my-1 dark:border-neutral-300 dark:text-neutral-50 ${isHovered ? 'text-red-500 font-bold' : ''
            } `}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}>



          <h2 className='truncate ...  '> {isHovered ? 'Más info' : product.description}</h2>
        </div>
      </Link>
    </div>
  );
}
export default CardProducts
