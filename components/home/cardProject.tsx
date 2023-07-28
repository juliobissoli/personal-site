import { Manrope } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  projectId: string;
}

const title = Manrope({ weight: "700", subsets: ["latin"] });
const subtitle = Manrope({ weight: "400", subsets: ["latin"] });



const CardProject: React.FC<Props> = ({ projectId }) => {


  return (
    <div className="w-[100vw] md:w-[90vw] h-[100vh]">
      <header className="flex justify-between items-end mb-2 border-b px-16 pt-16 pb-4">
        <h3 className={`text-4xl text-zinc-900 ${title.className}`}>CodTime</h3>
        <span className={`text-2xl text-zinc-900 ${subtitle.className}`}>2019 - 2020</span>
      </header>
      <div className="px-16 mt-8">
      <img src={projectId} className="h-[75vh] w-full  object-cover" />
      </div>

    </div>
  );
};

export default CardProject;
