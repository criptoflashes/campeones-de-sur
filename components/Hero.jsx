
"use client"
import Image from 'next/image'
import { motion } from "framer-motion"

function Hero() {
    return (
        <div className='my-10 '>
            <motion.div
                className="box flex  justify-center "
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0,
                    ease: [0, 0.10, 0.9, 1.90]
                }}
            > <ul className='text-left py-3 text-xl '>
                    <li>🥇Queremos deleitar tu paladar</li>
                </ul>
            </motion.div>



            <motion.div
                className="box flex  justify-center "
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0, 0.20, 0.9, 1.90]
                }}
            >
                <ul className='text-left py-3 text-xl '>
                    <li>🥈Te brindamos una experiencia única</li>
                </ul>
            </motion.div>

            <motion.div
                className="box flex  justify-center "
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 1,
                    ease: [0, 0.30, 0.9, 1.90]
                }}
            >
                <ul className='text-left py-3 text-xl '>
                    <li>🥉Lo hacemos con orgullo y pasión</li>
                </ul>
            </motion.div>

            <div className="carousel carousel-end rounded-box h-60 mt-10">

                <div className="carousel-item">
                    <Image src="https://images.pexels.com/photos/4187778/pexels-photo-4187778.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Drink"
                        height="100"
                        width="200" />
                </div>
                <div className="carousel-item">
                    <Image src="https://images.pexels.com/photos/4639785/pexels-photo-4639785.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Drink" height="100"
                        width="300" />
                </div>

                <div className="carousel-item">
                    <Image src="https://images.pexels.com/photos/4109938/pexels-photo-4109938.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Drink" height="50"
                        width="200" />
                </div>

                <div className="carousel-item">
                    <Image src="https://images.pexels.com/photos/8250416/pexels-photo-8250416.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Drink"
                        height="100"
                        width="300" />
                </div>
                {/*             <div className="carousel-item">
                <Image src="https://images.pexels.com/photos/6287519/pexels-photo-6287519.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Drink" height="100"
                    width="200" />
            </div> */}
                <div className="carousel-item">
                    <Image src="https://images.pexels.com/photos/5755518/pexels-photo-5755518.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Drink" height="100"
                        width="200" />
                </div>
                <div className="carousel-item">
                    <Image src="https://images.pexels.com/photos/3756498/pexels-photo-3756498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        height="100"
                        width="300"
                        alt="GFG logo served from external URL" />
                </div>

            </div>
        </div>
    )
}

export default Hero
