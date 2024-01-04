
"use client"
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion"





 function PresentationHomeText() {


    const productsDiv = useRef(null)
    const { scrollYProgress } = useScroll({
        target: productsDiv,
        offset: ["start end", "end end"]
    })



    const smoothOpacity = useSpring(scrollYProgress, { stiffness: 100, damping: 50, mass: 0.9 })
    return (
        <div ref={productsDiv} className="flex flex-col  h-full  ">

            <div className="divider bg-yellow-100"></div>
            <motion.div style={{ opacity: smoothOpacity, scale: smoothOpacity }}/* initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ease: "easeInOut", duration: 3 }} */ className=" ">


                <h2 className=" text-2xl text-slate-600 text-center	 ">
                    “En nuestra empresa nos dedicamos a ofrecer alimentos de alta calidad
                    que deleiten el paladar de nuestros clientes. Nos esforzamos por brindar
                    una experiencia única en cada momento compartido con nuestros productos.
                    Nos enorgullece ser una empresa argentina y trabajamos para reflejar la
                    excelencia de nuestra cultura en todo lo que hacemos.”
                </h2>
            </motion.div>

            <div className="divider bg-yellow-100"></div>
        </div>
    );
}

export default PresentationHomeText;











