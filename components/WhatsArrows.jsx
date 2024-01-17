import React from 'react'
import { motion } from 'framer-motion'

function WhatsArrows() {
    return (
        
            <div className='flex justify-center  '>
                <div className="px-4 py-3 text-white" >
                    <motion.div animate={{
                        scale: [1],
                        x: [0, 50],
                        opacity: [1, 0.5, 0]
                    }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            times: [1],
                            repeat: "infinite",
                            repeatDelay: 1

                        }} className="flex flex-row place-content-center w-200 h-200">

                        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5" /></svg>
                    </motion.div>
                </div>
            </div>

       
    )
}

export default WhatsArrows
