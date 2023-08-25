import { useEffect, useRef, useState } from "react";
import CardProject from "@/components/home/cardProject";
import { WelcomeHome } from "@/components/home/welcome";
import Link from "next/link";
import ProjectsData from "../data/projects.json";
import Head from "next/head";

export default function Home() {
  const projectsBanner = ProjectsData;

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      carousel.addEventListener("wheel", handleScroll);
    }
  }, []);

  const handleScroll = (event: any) => {
    if (carouselRef && carouselRef.current) {
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
      <Head>
        <title>Julio Bissoli</title>
      </Head>
      <div
        className={` scroll-inherit-display  flex flex-wrap-nowrap whitespace-nowrap overflow-x-auto  overflow-y-hidden w-auto`}
        ref={carouselRef}
      >
        <div>
          <WelcomeHome
          clickShowMore={() => {
            console.log('Welcome', projectsBanner[0].id)
            const element = document.getElementById(projectsBanner[0].id)
            if(element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          />
        </div>
        {projectsBanner.map((el, i) => (
          <div
            // href={`/project/${el.id}`}
            key={i}
            className={`border-y border-r ${i === 0 ? "border-l" : ""}`}
          >
            <CardProject
              projectImg={el.imagePath}
              title={el.title}
              year={el.year}
              id={el.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
