import Link from "next/link";
import { useEffect, useRef } from "react";
import CardProject from "./cardProject";



interface Props {
  onFirstScroll: (value: 'lock' | 'unlock') => void;
}

export const CarroucelProjects:  React.FC<Props> = ({ onFirstScroll })  => {
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
        onFirstScroll('lock');
        carouselRef.current.scrollTop -= event?.deltaY || 0;
      }
      else {
        onFirstScroll('unlock');
      }
    }
  };

  return (
    <div className="overflow-y-hidden">
      <div
        className={`px-32 scroll-inherit-display   flex flex-wrap-nowrap whitespace-nowrap overflow-x-auto  overflow-y-hidden w-auto mx-2`}
        ref={carouselRef}
      >
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
