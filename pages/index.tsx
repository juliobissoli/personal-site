import Image from "next/image";
import { Manrope } from "next/font/google";
import MainMenu from "@/components/mainMenu";

const poppins = Manrope({ weight: "800", subsets: ["latin"] });

export default function Home() {

  const projects = [
    {name: 'CodeTime', icon: 'icon-cod-time', bgColor: '#333333'},
    {name: 'Linhagua', icon: 'icon-linhagua ', bgColor: '#333DCA'},
    {name: 'StoneBox', icon: 'icon-stone-box', bgColor: '#160C01'},
    {name: 'Amais', icon: 'icon-amais', bgColor: '#8257E5'},
  ]

  return (
    <main className="">
      <MainMenu></MainMenu>
      <section className="flex h-[100vh]">
        <div className="w-1/2 h-full flex items-center justify-end">
          <h1
            className={`${poppins.className} 	 text-7xl w-[40vw] text-right absolute text-zinc-700 mb-[20rem]`}
          >
            Desenvolvedor e <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> UI/UX </span> design
          </h1>
        </div>
        <div className="w-1/2 h-full  justify-start flex items-center">
          <div className="flex flex-col mt-[10rem]">

          <h3 className="teste">
             principais projetos
            </h3>
          <div className="flex gap-3">
            {
              projects.map((el, i) => (
                <div key={i}
                style={{backgroundColor: el.bgColor}}
                className="h-[80px] w-[80px] flex justify-center items-center rounded">
                <i className={`icon ${el.icon} bg-white h-[50px] w-[50px]`}></i>
              </div>
              ))
            }
           
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}
