// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import Footer from '@/components/Footer'
import NavBar from '@/components/NavNar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Montserrat } from 'next/font/google'

import { useRouter } from 'next/router'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
const router = useRouter();

  return (
    <>
    <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <NavBar />
      <AnimatePresence mode="wait">
      <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </main>
    </>
  )
}