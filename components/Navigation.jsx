
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
                    <Link href="/services">services</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
