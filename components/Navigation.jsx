'use client'

import Link from 'next/link'
import Image from 'next/image'
import cheeseHome from '../public/cheese-svgrepo-com.svg'
import { motion } from "framer-motion"


function Navigation() {

    return (

        <div>
            <div className="navbar grid lg:grid-cols-3 md:grid-cols-1 bg-blue-300 border-b-8 border-b-yellow-100 pl-4 ">

                <motion.div whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }} className= "flex justify-center">
                    <Link href="/">
                        <Image src={cheeseHome} alt="campeones del sur" width="100" height="100" className='ml-4 ' />
                    </Link>
                </motion.div>



                <div className='justify-center invisible lg:visible'>
                    <h1 className=' text-center font-Cambay text-4xl  '>Campeones Del Sur</h1>
                </div>

                <div>

                    <div className="navbar-end  ">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                               
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>

                                    <li><Link href="/productos/todoslosproductos">Todos los productos</Link></li>                                
                                {/*                                 <li>
                                    <Link href="/quienessomos">Quienes somos</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>


                    <div className="navbar-center hidden lg:flex mr-8  ">
                        <ul className="menu menu-horizontal px-1 text-xl ">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>Productos</summary>
                                    <ul className="p-2  z-10">
                                        {/*                                 <li><Link href="/productos/quesos">Quesos</Link></li>
                                <li><Link href="/productos/chorizos">Chorizos</Link></li>
                                <li><Link href="/productos/yerba">Yerba</Link></li> */}
                                        <li><Link href="/productos/todoslosproductos">Todos los productos</Link></li>
                                    </ul>
                                </details>
                            </li>
{/*                             <li>
                                <Link href="/quienessomos">Quienes somos</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Navigation
