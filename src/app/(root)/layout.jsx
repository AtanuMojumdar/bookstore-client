import '../globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import TanStackProviders from '@/providers/TanStackProviders'
import UserProvider from '@/providers/UserProvider';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from '../../providers/reactToastify'


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
          <UserProvider>
            <Navbar />
            {children}
            <ToastContainer/>
          </UserProvider>
        </TanStackProviders>
      </body>
    </html>
  )
}
