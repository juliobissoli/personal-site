import { useEffect, useRef } from "react";
import CardProject from "./cardProject";

export const CarroucelProjects = () => {
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
      // carousel.addEventListener('mousedown', handleScroll);
      // carousel.addEventListener('mouseleave', handleScroll);
      // carousel.addEventListener('mousedown', handleScroll);
      carousel.addEventListener("wheel", handleScroll);
      // console.log(carousel);
    }
  }, []);

  const handleScroll = (event: any) => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.scrollLeft += event?.deltaY / 2 || 0;
      // carousel.style.scrollBehavior = 'smooth';
      if (carouselRef.current.scrollLeft > 0) {
        carouselRef.current.scrollTop -= event?.deltaY || 0;
        console.log("event => ", carouselRef.current.scrollTop);
      }
    }
  };

  return (
    <div className="overflow-y-hidden">
      <div
        className={`px-32 scroll-inherit-display divide-x flex flex-wrap-nowrap whitespace-nowrap overflow-x-auto  overflow-y-hidden w-auto`}
        ref={carouselRef}
      >
        {projectsBanner.map((el, i) => (
          <div
            key={i}
            className={`px-8 border border-x-0 ${
              i === 0 ? " border-l-[1px]" : ""
            } ${i === projectsBanner.length - 1 ? "border-l-[1px]" : ""}`}
          >
            <CardProject projectId={el.imagePath}></CardProject>
          </div>
        ))}
      </div>
    </div>
  );
};
