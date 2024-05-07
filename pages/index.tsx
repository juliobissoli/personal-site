import { useEffect, useRef, useState } from "react";
import CardProject from "@/components/home/cardProject";
import { WelcomeHome } from "@/components/home/welcome";
import ProjectsData from "../data/projects.json";
import Head from "next/head";
import { SplashScream } from "@/components/SplashScream";
import SeoDefault from "@/components/common/SeoDefault";

export default function Home() {
  const projectsBanner = ProjectsData.filter(el => el.highlights);;

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      carousel.addEventListener("wheel", handleScroll);
    }
  }, []);

  const handleScroll = (event: any) => {
    const width = window.innerWidth;
    if (carouselRef && carouselRef.current && width >= 768) {
      carouselRef.current.scrollLeft += event?.deltaY || 0;
      // carousel.style.scrollBehavior = 'smooth';
      if (carouselRef.current.scrollLeft > 0) {
        // onFirstScroll('lock');
        carouselRef.current.scrollTop -= event?.deltaY || 0;
      } else {
        // onFirstScroll('unlock');
      }
    }
  };

  return (
    <div className="overflow-y-hidden ">
      {/* <Head>
        <title> Julio Bissoli</title>
        <meta property="og:description" content="Olá, sou Juio Bissoli, desenvolvedor de software e UI/UX design"></meta>
        <meta property="og:title" content="Julio Bissoli" key="title" />
        <link rel="icon" href="/logo.svg" />
        <meta name="author" content="Julio Bissoli"></meta>
        <meta property="og:image" content={`https://raw.githubusercontent.com/juliobissoli/personal-site/main/public/img-share.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:image" content={`https://raw.githubusercontent.com/juliobissoli/personal-site/main/public/img-share.png`}></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="Julio Bissoli"></meta>
        <meta name="twitter:description" content="Olá, sou Juio Bissoli, desenvolvedor de software e UI/UX design"></meta>
      </Head> */}

      <SeoDefault />
    
      <div
        className="scroll-inherit-display bloc md:flex flex-wrap-nowrap whitespace-nowrap overflow-x-auto  overflow-y-hidden w-auto"
        ref={carouselRef}
      >
        <div>
          <WelcomeHome
            clickShowMore={() => {
              console.log('Welcome', projectsBanner[0].id)
              const element = document.getElementById(projectsBanner[0].id)
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        </div>
        {projectsBanner.map((el, i) => (
          <div
            // href={`/project/${el.id}`}
            key={i}
            className={`border-y-primary border-r-primary ${i === 0 ? "border-l-primary" : ""}`}
          >
            <CardProject
              project={el}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
