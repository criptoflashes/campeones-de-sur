import './globals.css'
import { Inter } from 'next/font/google'

import Announcement from '@/components/Announcement';
import Navigation from '@/components/Navigation'
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Campeones del Sur',
  description: 'Campeones del Sur,los mejores salames y quesos',
  keywords: 'salames, quesos, venta'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
       
      <body className= {`${inter.className}`} >
     {/*  <div style={{zIndex: -2, position: "relative", width:"100vw", nheight:"100vh"}}> */}
      {/* <Image src={logo} width="200" height="200" objectFit="center"  /> */}
      <Announcement/>
      <Navigation />
     
      
      
      {children}
     
        <Footer/>
        {/* </div> */}
        </body>
    </html>
  )
}
