import Image from 'next/image'
import { Poppins, Inter, Sora } from 'next/font/google'
import MainMenu from '@/components/mainMenu'

const poppins = Poppins({ weight: "200", subsets: ['latin'] })
const inter = Sora({ weight: "800", subsets: ['latin'] })

export default function Teste() {
  return (
  <main>
    <MainMenu></MainMenu>
    <div className="flex w-full h-full justify-center items-center">
      <div className={`spin-slow  text-center blur-3xl	 p-3 flex  items-center justify-center h-[90vh] rounded-full w-[90vh] bg-gradient-to-r from-purple-500 to-orange-500`}></div>
      <h1 className={`${poppins.className} text-7xl absolute text-secondary`}>
      Desenvolvedor e UI/UX design
      </h1>
    </div>
  </main>
  )
}
