import Image from "next/image";
import { Manrope } from "next/font/google";
import MainMenu from "@/components/mainMenu";
import BannerAside from "@/components/home/bannerAside";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "@/utils/isVisible";
import CardProject from "@/components/home/cardProject";
import { CarroucelProjects } from "@/components/home/carrolcelProjects";
import { InView, useInView } from "react-intersection-observer";
import { WelcomeHome } from "@/components/home/welcome";
import Link from "next/link";

const poppins = Manrope({ weight: "800", subsets: ["latin"] });
const subtitle = Manrope({ weight: "400", subsets: ["latin"] });

// export default function Home() {
//   const projectsBanner = [
//     {
//       title: "CodTime",
//       year: "2021 - 2022",
//       imagePath: "codtime-splash-img.png",
//     },
//     {
//       title: "ERP-Linhagua",
//       year: "2021 - 2022",
//       imagePath: "linhagua-splash-img.png",
//     },
//     {
//       title: "ERP-Linhagua",
//       year: "2021 - 2022",
//       imagePath: "linhagua-splash-img.png",
//     },
//   ];

//   const [scrollLocked, setLocked] = useState(false);

//   const { ref, inView } = useInView({
//     threshold: 1, // 100% visível
//     onChange: (inView) => {
//       console.log("=> ", inView);
//       if (!inView) {
//         // setLocked(false)
//       }
//     },
//   });

//   return (
//     <main
//       className={`h-[100vh]  scroll-inherit-display  scroll-inherit-display   flex flex-wrap-nowrap whitespace-nowrap overflow-x-auto  overflow-y-hidden w-auto`}
//     >
//       <WelcomeHome />
//       <section
//         ref={ref}
//         className="h-[100vh]"
//       >
//         {/* <CarroucelProjects
//           onFirstScroll={(value) => {
//             //  console.log(value,   scrollLocked, inView)
//             if (value === "lock" && !scrollLocked) {
//               setLocked(true);
//             }
//             if (value === "unlock" && !scrollLocked) {
//               // console.log('desbloqueia')
//               setLocked(false);
//             }
//           }}
//         /> */}
//         <div  className={`pl-32 scroll-inherit-display divide-x flex flex-wrap-nowrap whitespace-nowrap overflow-x-auto  overflow-y-hidden w-auto `}>
//           {projectsBanner.map((el, i) => (
//             <div key={i} className="">
//               <CardProject projectId={el.imagePath}></CardProject>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

export default function Home() {
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
    {
      title: "ERP-Linhagua",
      year: "2021 - 2022",
      imagePath: "linhagua-splash-img.png",
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      carousel.addEventListener("wheel", handleScroll);
    }
  }, []);

  const handleScroll = (event: any) => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.scrollLeft += event?.deltaY / 2 || 0;
      // carousel.style.scrollBehavior = 'smooth';
      if (carouselRef.current.scrollLeft > 0) {
        // onFirstScroll('lock');
        carouselRef.current.scrollTop -= event?.deltaY || 0;
      }
      else {
        // onFirstScroll('unlock');
      }
    }
  };

  return (
    <div className="overflow-y-hidden">
      <div
        className={` scroll-inherit-display  flex flex-col md:flex-row flex-wrap-nowrap whitespace-nowrap overflow-x-auto  overflow-y-hidden w-auto`}
        ref={carouselRef}
      >
        <div > 
         <WelcomeHome />
        </div>
        {projectsBanner.map((el, i) => (
          <Link href={`/project/${el.imagePath}`}
            key={i}
            className={`px-8 border-y border-r ${i === 0 ? 'border-l' : ''}`}
          >
            <CardProject projectId={el.imagePath}></CardProject>
          </Link>
        ))}
      </div>
    </div>
  );
};