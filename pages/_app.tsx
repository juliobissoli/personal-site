import MainMenu from '@/components/mainMenu'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Manrope } from 'next/font/google'


const manropeFont = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500'],
  style: ['normal'],
  // display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main  className={`h-[100vh] overflow-y-auto  scroll-inherit-display ${manropeFont.className}`}>
      <MainMenu />
      <div className='mt-20 md:mt-0'>
        <Component {...pageProps} />
      </div>
      
    </main>
  )
}
