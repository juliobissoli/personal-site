import Image from "next/image";
import { Manrope } from "next/font/google";
import MainMenu from "@/components/mainMenu";
import BannerAside from "@/components/home/bannerAside";
import { useRef } from "react";
import useOnScreen from "@/utils/isVisible";
import { Keyframes, Scroll } from "scrollex";
import Link from "next/link";

const poppins = Manrope({ weight: "800", subsets: ["latin"] });
const subtitle = Manrope({ weight: "400", subsets: ["latin"] });

const keyframes: Record<string, Keyframes> = {
  imageContainer: ({ section }) => ({
    [section.topAt("container-bottom")]: {
      translateX: 725,
      // translateX: -250,
      opacity: 0,
      // rotateX: -25,
      // rotateY: -50,
      // scale: 0.4,
    },
    [section.topAt("container-top")]: {
      translateX: 0,
      // translateX: 0,
      opacity: 1,
      // rotateX: 0,
      // rotateY: 0,
      // scale: 1,
    },
    [section.bottomAt("container-top")]: {
      translateX: -125,
      // translateX: 250,
      opacity: 0,
      // rotateX: 25,
      // rotateY: 50,
      // scale: 0.4,
    },
  }),
  image: ({ section }) => ({
    [section.topAt("container-bottom")]: {
      translateY: -62.5,
      translateX: 125,
      scale: 0.2,
    },
    [section.topAt("container-top")]: {
      translateY: 0,
      translateX: 0,
      scale: 1,
    },
    [section.bottomAt("container-top")]: {
      translateY: 62.5,
      translateX: -325,
      scale: 2,
    },
  }),

  heading: ({ section }) => ({
    [section.topAt("container-bottom")]: {
      translateX: -400,
      scale: 1.8,
    },
    [section.bottomAt("container-top")]: {
      translateX: -700,
      scale: 0.8,
    },
  }),

  headingSecondary: ({ section }) => ({
    [section.topAt("container-bottom")]: {
      translateX: -578,
      scale: 1.8,
    },
    [section.bottomAt("container-top")]: {
      translateX: -700,
      scale: 0.8,
    },
  }),
};

export default function Home() {
  // const projects = [
  //   { name: "CodeTime", icon: "icon-cod-time", bgColor: "#333333" },
  //   { name: "Linhagua", icon: "icon-linhagua ", bgColor: "#333333" },
  //   { name: "StoneBox", icon: "icon-stone-box", bgColor: "#333333" },
  //   { name: "Amais", icon: "icon-amais", bgColor: "#333333" },
  // ];

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

  // const ref = useRef<HTMLDivElement>(null);

  // const isVisible = useOnScreen(ref);

  return (
    <Scroll.Container
      scrollAxis="y"
      className="snap-y snap-mandatory h-[100vh] overflow-hidden"
    >
      <Scroll.Section className="snap-start h-[100vh] overflow-hidden">
        <div className="fixed top-0 pointer-events-none flex justify-center items-center w-full h-full overflow-hidden ">
          <Scroll.Item keyframes={keyframes.heading} className="">
            <h1
              className={`${poppins.className} 	 text-7xl w-[40vw] text-right fixed text-zinc-700  mr-8 mt-[-10vh]`}
            >
              Desenvolvedor e{" "}
            </h1>
          </Scroll.Item>
          <Scroll.Item keyframes={keyframes.headingSecondary} className="">
            <h1
              className={`${poppins.className} text-7xl w-[40vw] text-right fixed text-zinc-700  mr-8 mt-[-3vh]`}
            >
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                UI/UX{" "}
              </span>{" "}
              design
            </h1>
          </Scroll.Item>
        </div>
      </Scroll.Section>
      {projectsBanner.map((el, i) => {
        return (
          <div
              key={i}
          >
            <Link href={`/project/${el?.imagePath || ""}`}>
              <Scroll.Section
                className="snap-start h-[100vh] overflow-hidden"
              >
                <div
                  className="fixed top-0 pointer-events-none flex justify-between items-center w-full h-full overflow-hidden"
                  // style={{ perspective: 600, transformStyle: "preserve-3d" }}
                >
                  <div className="w-[50%]"></div>
                  <Scroll.Item
                    keyframes={keyframes.imageContainer}
                    className="overflow-hidden w-[50%] relative"
                  >
                    {/* <Scroll.Item ></Scroll.Item> */}
                    <BannerAside
                      title={el?.title}
                      year={el?.year}
                      imagePath={el?.imagePath}
                    ></BannerAside>
                    {/* <img src={el} className="h-[100vh] w-full object-cover	" /> */}
                  </Scroll.Item>
                </div>
              </Scroll.Section>
            </Link>
          </div>
        );
      })}
      <Scroll.Section className="snap-start h-[100vh] overflow-hidden">
        <div className="bg-zinc-900 pointer-events-none flex justify-center items-center w-full h-full overflow-hidden">
          <h1
            className={`${subtitle.className} text-9xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600`}
          >
            Fale comigo
          </h1>
        </div>
      </Scroll.Section>
    </Scroll.Container>
  );
}
