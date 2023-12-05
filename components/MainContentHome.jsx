"use client"
/* import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion"

 */

/* API products state */
/* import { useGetProductsQuery } from '@/redux/services/productApi' */


function MainContentHome() {



   /*  const productsDiv = useRef(null)
    const { scrollYProgress } = useScroll({
        target: productsDiv,
        offset: ["start end", "end end"]
    })




    const smoothOpacity = useSpring(scrollYProgress, { stiffness: 100, damping: 50, mass: 0.5 })
 */
    /* API products state */
/*     const { isLoading, isFetching, data, error } = useGetProductsQuery(null);

    if (isLoading || isFetching) return <p>loading...</p>;
    if (error) return <p>some error</p>;
    console.log("la dataa", data)
 */






    return (
        <div className="py-20 "> <div className="divider"></div>
{/* 
            <div ref={productsDiv} className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8" >


                <motion.div style={{ opacity: smoothOpacity, scale: smoothOpacity }}className="h-32 rounded-lg bg-gray-400"></motion.div>
                <motion.div   style={{ opacity: smoothOpacity, scale: smoothOpacity }} className="h-32 rounded-lg bg-gray-400"></motion.div>
                <motion.div style={{ opacity: smoothOpacity, scale: smoothOpacity }} className="h-32 rounded-lg bg-gray-400 lg:col-span-2">       <div className="flex flex-col w-3/4 pt-5 mx-auto  ">
        <h2 className=" text-2xl text-slate-600 text-center	">
          “En nuestra empresa nos dedicamos a ofrecer alimentos de alta calidad
          que deleiten el paladar de nuestros clientes. Nos esforzamos por brindar
          una experiencia única en cada momento compartido con nuestros productos.
          Nos enorgullece ser una empresa argentina y trabajamos para reflejar la
          excelencia de nuestra cultura en todo lo que hacemos.”
        </h2>
      </div></motion.div>


                <motion.div style={{ opacity: smoothOpacity, scale: smoothOpacity }} className="h-32 rounded-lg bg-gray-400 lg:col-span-2"></motion.div>
                <motion.div style={{ opacity: smoothOpacity, scale: smoothOpacity }}  className="h-32 rounded-lg bg-gray-400"></motion.div>
                <motion.div style={{ opacity: smoothOpacity, scale: smoothOpacity }} className="h-32 rounded-lg bg-gray-400"></motion.div>


            </div>

 */}



{/* 
            <div className="grid grid-cols-3">
                {error ? (
                    <p>some error</p>
                ) : isLoading || isFetching ? (
                    <p>loading...</p>
                ) : (
                    data?.map((product) => (
                        <div key={product.id}>

                            <p key={product.id} className="text-center font-bold mt-4">{product.title}</p>
                        </div>
                    ))
                )}
            </div> */}


        </div>


    )
}

export default MainContentHome
