import { Manrope } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  projectId: string;
}

const subtitle = Manrope({ weight: "400", subsets: ["latin"] });



const CardProject: React.FC<Props> = ({ projectId }) => {


  return (
    <div className="w-[100vh] h-[80vh] m-8">
      <header className="flex justify-between mb-2">
        <h3 className={`text-2xl text-zinc-900 ${subtitle.className}`}>CodTime</h3>
        <span className={`text-2xl text-zinc-900 ${subtitle.className}`}>2019 - 2020</span>
      </header>
     <img src={projectId} className="h-[75vh] w-full  object-cover" />

    </div>
  );
};

export default CardProject;
