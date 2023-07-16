"use client"
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion"

function MainContentHome() {

  
       

        const productsDiv = useRef(null)
        const { scrollYProgress } = useScroll({target: productsDiv, 
            offset: ["start end",  "end end"]})

       
        const smoothOpacity = useSpring(scrollYProgress , { stiffness: 100, damping: 50 })

    return (
        <div className="py-20 "> <div className="divider"></div>

            <div ref = {productsDiv} class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8" >


                <motion.div style={{ opacity: smoothOpacity   , scale: smoothOpacity  }}/* style={{ scaleX: scrollYProgress }} */  /* animate={{ opacity:scrollYProgress, scale: 1 }} */ /* transition={{ ease: "easeInOut", duration: 0.8 }}  */class="h-32 rounded-lg bg-gray-400"></motion.div>
                <motion.div style={{ opacity: smoothOpacity    , scale: smoothOpacity   }}/* initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ease: "easeInOut", duration: 2 }} */ class="h-32 rounded-lg bg-gray-400"></motion.div>
                <motion.div style={{  opacity: smoothOpacity    , scale: smoothOpacity    }}/* initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ease: "easeInOut", duration: 3 }} */ class="h-32 rounded-lg bg-gray-400 lg:col-span-2"></motion.div>


                <motion.div style={{  opacity: smoothOpacity    , scale: smoothOpacity    }} /* initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ease: "easeInOut", duration: 4 }} */ class="h-32 rounded-lg bg-gray-400 lg:col-span-2"></motion.div>
                <motion.div style={{  opacity: smoothOpacity    , scale: smoothOpacity     }} /* initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ease: "easeInOut", duration: 5 }} */ class="h-32 rounded-lg bg-gray-400"></motion.div>
                <motion.div style={{  opacity: smoothOpacity    , scale: smoothOpacity    }} /* initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ ease: "easeInOut",duration: 6 }} */class="h-32 rounded-lg bg-gray-400"></motion.div>


            </div>
        </div>
    )
}

export default MainContentHome
