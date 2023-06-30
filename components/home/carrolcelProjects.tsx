import { useEffect } from "react";
import CardProject from "./cardProject";

export const CarroucelProjects = () => {

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

  return (
    <div className="">
      <div
        className={`px-32 scroll-inherit-display divide-x flex flex-wrap-nowrap whitespace-nowrap overflow-x-auto  overflow-y-hidden w-auto`}
      >
        {projectsBanner.map((el, i) => (
          <div key={i} className={`px-8 border border-x-0 ${i === 0 ? ' border-l-[1px]' : ''} ${i === projectsBanner.length -1 ? 'border-l-[1px]' : ''}`}>
            <CardProject projectId={el.imagePath}></CardProject>
          </div>
        ))}
      </div>
    </div>
  );
};
