import './globals.css'
import { Roboto_Condensed } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const robo = Roboto_Condensed({ subsets: ['latin'], weight: ['400']})

export const metadata = {
  title: 'my first React',
  description: 'this is react and nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robo.className}>
        {/* <Navbar /> */}
        <main className="text-[50px] h-[420px]">
        {children}
        </main>
        
        {/* <Footer /> */}
      </body>
    </html>
  )
}
