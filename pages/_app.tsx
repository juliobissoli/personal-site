import MainMenu from '@/components/mainMenu'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Manrope } from 'next/font/google'
import Head from 'next/head'


const manropeFont = Inter({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500'],
  style: ['normal'],
  // display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Julio Bissoli</title>
        <meta property="og:description" content="Olá, sou Juio Bissoli, desenvolvedor de software e UI/UX design"></meta>
        <meta property="og:title" content="Julio Bissoli" key="title" />
        <link rel="icon" href="/logo.svg" />
        <meta property="og:image" content="/da-backoffice/banner-backoffice.png" />
      </Head>
      <main className={`h-[100vh] overflow-y-auto  scroll-inherit-display dark:bg-zinc-950 dark:text-white ${manropeFont.className}`}>
        <MainMenu />
        <div className='mt-20 md:mt-0'>
          <Component {...pageProps} />
        </div>

      </main>
    </>
  )
}
