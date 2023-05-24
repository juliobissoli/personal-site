import MainMenu from '@/components/mainMenu'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main  className='h-[100vh] '>
      <MainMenu />
      
      <Component {...pageProps} />
      
    </main>
  )
}
