import React from 'react'
import { motion } from 'framer-motion'

function WhatsArrows() {
    return (

        <div className='flex justify-center  '>
            <div className="px-4 py-3 text-white" >
                <motion.div animate={{
                    scale: [1],
                    y: [0, 50],
                    opacity: [1, 0.5, 0]
                }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        times: [1],
                        repeat: "infinite",
                        repeatDelay: 1

                    }} className="flex flex-row place-content-center w-200 h-200">
   <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="black" class="mi-outline mi-arrow-down" viewBox="0 0 42 42">
  <path d="M12 20.79c-.38 0-.77-.15-1.06-.44l-6.79-6.79A1.497 1.497 0 0 1 5.21 11H8V4.5C8 3.67 8.67 3 9.5 3h5c.83 0 1.5.67 1.5 1.5V11h2.79c.61 0 1.15.36 1.39.93s.11 1.2-.33 1.63l-6.79 6.79c-.29.29-.68.44-1.06.44M6.41 13 12 18.59 17.59 13H14V5h-4v8z"/>
</svg>
                </motion.div>
            </div>
        </div>


    )
}

export default WhatsArrows
