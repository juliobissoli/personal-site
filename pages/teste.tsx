import Image from 'next/image'
import { Poppins, Inter, Sora, Manrope } from 'next/font/google'
import MainMenu from '@/components/mainMenu'
import { Scroll } from "scrollex";
import BannerAside from '@/components/home/bannerAside';


const keyframes = {
  heading: {
    0: {
      translateX: -200,
    },
    200: {
      translateX: 200,
    },
  },
};

const poppins = Manrope({ weight: "800", subsets: ["latin"] });
const subtitle = Manrope({ weight: "400", subsets: ["latin"] });


export default function Teste() {

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


// const keyframes = {
//     heading: {
//       0: {
//         // innerWidth: '100%',
//         translateX: -200,
//       },
//       100: {
//         // innerWidth: '50%',
//         translateX: 200,
//       },
//     },
//   };

      
  return (
  <main>
    <MainMenu></MainMenu>
    <Scroll.Container scrollAxis='y' className="	">
      {/* <MainMenu></MainMenu> */}
      <Scroll.Section className="h-[100vh] w-full flex justify-center items-center bg-zinc-200">
        <Scroll.Item keyframes={keyframes.heading}>
          <h1>Page One</h1>
        </Scroll.Item>
      </Scroll.Section>

      <Scroll.Section className="flex  h-[100vh]">
        <div>
          <Scroll.Item className=" h-full fixed  flex items-center justify-end"
        keyframes={keyframes.heading}>

          <h1
            className={`${poppins.className} 	 text-7xl w-[40vw] text-right  text-zinc-700 mb-[10rem] mr-8`}
            >
            Desenvolvedor e{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {" "}
              UI/UX{" "}
            </span>{" "}
            design 
          </h1>
            </Scroll.Item>
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
      </Scroll.Section>
      {projectsBanner.map((el, i) => (
        <section className="scroll-child flex justify-between" key={i}>
          <div className="w-1/2" />
          <div className=" w-1/2    ">
            <div className="w-full scroll-child " >
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
    </Scroll.Container>

  </main>
  )
}
