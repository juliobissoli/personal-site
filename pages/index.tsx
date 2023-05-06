import Image from "next/image";
import { Manrope } from "next/font/google";
import MainMenu from "@/components/mainMenu";
import BannerAside from "@/components/home/bannerAside";
import { useRef } from "react";
import useOnScreen from "@/utils/isVisible";

const poppins = Manrope({ weight: "800", subsets: ["latin"] });
const subtitle = Manrope({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const projects = [
    { name: "CodeTime", icon: "icon-cod-time", bgColor: "#333333" },
    { name: "Linhagua", icon: "icon-linhagua ", bgColor: "#333333" },
    { name: "StoneBox", icon: "icon-stone-box", bgColor: "#333333" },
    { name: "Amais", icon: "icon-amais", bgColor: "#333333" },
  ];

  const projectsBanner = [
    {
      title: "CodTime",
      year: "2021 - 2022",
      imagePath: "codtime-splash-img.png",
    },
    {
      title: "ERP-Linhagua",
      year: "2021 - 2022",
      imagePath: "linhagua-splash-img.png",
    },
  ];



  const ref = useRef<HTMLDivElement>(null);

  // const isVisible = useOnScreen(ref);


  return (
    <main className="scroller overflow-y-hidden	">
      {/* <MainMenu></MainMenu> */}
      <section className="flex  h-[100vh] scroll-child">
        <div className="w-1/2 h-full  relative flex items-center justify-end">
          <h1
            className={`${poppins.className} 	 text-7xl w-[40vw] text-right fixed text-zinc-700 mb-[10rem] mr-8`}
          >
            Desenvolvedor e{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {" "}
              UI/UX{" "}
            </span>{" "}
            design 
          </h1>
        </div>
        <div className="w-1/2 h-full  justify-start flex items-center">
          <div className="p-8  z-10 sticky">
            <div className="flex flex-col mt-[40rem] text-left  fixed bottom-0 left-[50%] mb-[5rem] ml-8">
              <div className="flex gap-3">
                {projects.map((el, i) => (
                  <div
                    key={i}
                    className={`${
                      i !== 0 ? "border border-zinc-400" : "bg-zinc-800"
                    } h-[60px] w-[60px] flex justify-center items-center rounded-xl`}
                  >
                    <i
                      className={`icon ${el.icon} ${
                        i == 0 ? "bg-white" : "bg-zinc-900"
                      } h-[30px] w-[30px]`}
                    ></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {projectsBanner.map((el, i) => (
        <section className="scroll-child flex justify-between" key={i}>
          <div className="w-1/2" />
          <div className=" w-1/2    ">
            <div className="w-full scroll-child " ref={ref}>
              <BannerAside
                title={el.title}
                year={el.year}
                imagePath={el.imagePath}
              ></BannerAside>
            </div>
          </div>
        </section>
      ))}

      <section className="scroll-child sticky">
        <div className=" h-[100vh] w-full p-20 bg-zinc-900 z-20">
        <h1 className={`${subtitle.className} text-9xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600`}>Fale comigo</h1>
        </div>
      </section>
    </main>
  );
}
