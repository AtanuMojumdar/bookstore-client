import '../globals.css'
import { Inter } from 'next/font/google'
import TanStackProviders from '@/providers/TanStackProviders.jsx'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from '../../providers/reactToastify';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BookStore',
  description: 'Ecommerce website for books',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanStackProviders>
        {children}
        <ToastContainer/>
        </TanStackProviders>
      </body>
    </html>
  )
}
