import Image from "next/image";
import { Manrope } from "next/font/google";
import MainMenu from "@/components/mainMenu";
import BannerAside from "@/components/home/bannerAside";
import { useEffect, useRef } from "react";
import useOnScreen from "@/utils/isVisible";
import CardProject from "@/components/home/cardProject";
import { CarroucelProjects } from "@/components/home/carrolcelProjects";

const poppins = Manrope({ weight: "800", subsets: ["latin"] });
const subtitle = Manrope({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const projects = [
    { name: "CodeTime", icon: "icon-cod-time", bgColor: "#333333" },
    { name: "Linhagua", icon: "icon-linhagua ", bgColor: "#333333" },
    { name: "StoneBox", icon: "icon-stone-box", bgColor: "#333333" },
    { name: "Amais", icon: "icon-amais", bgColor: "#333333" },
  ];

 
  useEffect(() => {
    const handleScroll = () => {
      // Lógica para manipular o evento de scroll
      console.log('Scroll capturado!');
    };

    // Adiciona o listener para o evento de scroll quando o componente monta
    window.addEventListener('scroll', handleScroll);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  // const isVisible = useOnScreen(ref);

  return (
    <main className="overflow-y-hidden	">
      {/* <MainMenu></MainMenu> */}
      <section className="h-[100vh]">
        <div className="w-full h-full  flex items-center justify-center">
          <h1
            className={`${poppins.className} 	 text-7xl w-[40vw] text-center text-zinc-700`}
          >
            Desenvolvedor e{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {" "}
              UI/UX{" "}
            </span>{" "}
            design
          </h1>
        </div>
      </section>
      <section className="h-[100vh] flex items-center">
      <CarroucelProjects />
        {/* <div  className={`pl-32 scroll-inherit-display divide-x flex flex-wrap-nowrap whitespace-nowrap overflow-x-auto  overflow-y-hidden w-auto `}>
          {projectsBanner.map((el, i) => (
            <div key={i} className="">
              <CardProject projectId={el.imagePath}></CardProject>
            </div>
          ))}
        </div> */}
      </section>
    </main>
  );
}
