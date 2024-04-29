import MainMenu from '@/components/mainMenu'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Manrope } from 'next/font/google'
import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'


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
      <main className={`h-[100vh] overflow-y-auto  scroll-inherit-display dark:bg-zinc-950 dark:text-white ${manropeFont.className}`}>
        <MainMenu />
        <div className='mt-20 md:mt-0'>
          <Component {...pageProps} />
        </div>

      </main>
    </>
  )
}
