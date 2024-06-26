import '@/tailwind/globals.css'
import { Poppins,   Black_Ops_One } from 'next/font/google';
import Header from '@/components/layout/Header';
import NavBar from '@/components/layout/NavBar';
// import './globals.css'
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata = {
  title: 'Gambers - Camana',
  description: 'Generated by JoseMaria JR.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} px-0 md:px-20 lg:px-32`}>
        <Header />
        <NavBar />
        {children}
      </body>
    </html>
  )
}
