
import Link from 'next/link'


function Navigation() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">home</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/about">about</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/productos">services</Link>
                </li>
            </ul>




            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                            </ul>

                            <li>
                                <Link href="/productos">services</Link>
                                <ul className="p-2">
                                    <li><Link href="/productos/quesos">Quesos</Link></li>
                                    <li><Link href="/productos/chorizos">Chorizos</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/quienessomos">Quienes somos</Link>
                            </li>
                        </ul>
                    </div>
                    <a className="btn  normal-case text-xl btn-accent">Campeones del Sur</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Productos</summary>
                                <ul className="p-2">
                                    <li><Link href="/productos/quesos">Quesos</Link></li>
                                    <li><Link href="/productos/chorizos">Chorizos</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link href="/quienessomos">Quienes somos</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </div>
    )
}

export default Navigation
