// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import Footer from '@/components/Footer'
import NavBar from '@/components/NavNar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
const router = useRouter();

  return (
    <>
    <Head>
      <meta name='viewport' content='widht=device-widht, initial-scale=1' />
      <Link rel='icon' href="/favicon.ico"/>
    </Head>
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