import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/redux/providers'
import Logo from '/components/Logo';
import Navigation from '/components/Navigation'
import WhatsButton from '@/components/WhatsButton';
import Footer from "/components/Footer";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Campeones del Sur',
  description: 'Campeones del Sur,los mejores salames y quesos',
  keywords: 'salames, quesos, venta'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">

      <body className={`${inter.className}`} >
        <Providers>

        {/* <div class="... sticky top-0">
                <p>sticky top</p>
            </div> */}
          
          <Logo/>
          <div class="... sticky top-0 z-10">
          <Navigation />
          
          </div>
          {children}
          
          <div class="... sticky bottom-60 z-10 flex justify-end"><WhatsButton/></div>
          <Footer />
        </Providers>
        {/* </div> */}
      </body>
    </html>
  )
}
