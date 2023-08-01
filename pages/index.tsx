import { useEffect, useRef, useState } from "react";
import CardProject from "@/components/home/cardProject";
import { WelcomeHome } from "@/components/home/welcome";
import Link from "next/link";
import ProjectsData from "../data/projects.json"

export default function Home() {
  const projectsBanner = ProjectsData 

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
          <Link href={`/project/${el.id}`}
            key={i}
            className={`border-y border-r ${i === 0 ? 'border-l' : ''}`}
          >
            <CardProject projectImg={el.imagePath}></CardProject>
          </Link>
        ))}
      </div>
    </div>
  );
};