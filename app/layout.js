import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Campeones del Sur',
  description: 'Campeones del Sur,los mejores salames y quesos',
  keywords: 'salames, quesos, venta'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={inter.className}>
        <Navigation/>
        {children}</body>
    </html>
  )
}
