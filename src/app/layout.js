import Navbar from '@/components/navbar/Navbar'
import { Inter, Roboto, Poppins } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import Authprovider from "@/components/authProvider/Authprovider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to the sea of Dorr',
  description: 'This is the description of the website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Authprovider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </Authprovider>
        </ThemeProvider>
      </body>
    </html>
  )
}
