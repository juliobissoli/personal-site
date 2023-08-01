import { ArrowArcRight, ArrowRight } from "@phosphor-icons/react";
import { Inter, Manrope } from "next/font/google";

const textStrong = Manrope({ weight: "800", subsets: ["latin"] });
const textThin = Manrope({ weight: "300", subsets: ["latin"] });

export const WelcomeHome = () => {
  return (
    <div className="w-[100vw] h-[100vh] lg:pl-[5vw]  md:pl-[6vw] pl-[10vw]">
      <div className="flex justify-between h-full border-l">
        <aside className="py-16 h-full lg:w-[95vw]  md:w-[94vw] w-[80vw] flex flex-col justify-between">
          <h3 className="px-4 text-2xl text-zinc-900 border-b pb-4 ">
            <strong className={textStrong.className}> Julio </strong>
            <span className={textThin.className}> Bissoli</span>
          </h3>
          <h1
            className={`${textStrong.className} px-4 fade-in text-[8vw] sm:text-[20vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw] w-[80vw] w-[90vw] lg:w-[80vw] flex flex-wrap text-center text-zinc-700`}
          >
            Desenvolvedor {"&"}
            <span
              className={`${textStrong.className}font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-700 lg:mt-[-5vh]`}
            >
              UI/UX design
            </span>{" "}
          </h1>

          <span className="text-3xl px-4 text-zinc-500">Contruindo sua ideia desde a concepção até produto final</span>
          <div
            className={`${textThin.className} text-zinc-600 text-md uppercase w-full flex w-full justify-end text-right px-4   border-t pt-4`}
          >
            <a className="flex items-center gap-3 ">
              <span className=""> Principais trabalhos </span>
              <ArrowRight className="text-md" weight="thin" />
            </a>
          </div>
        </aside>
        <aside className="border-l h-full lg:w-[5vw]  md:w-[6vw] w-[10vw] bg-zinc-50">
          <span className="-rotate-90  whitespace-nowrap sm:text-xs md:text-sm tracking-wider uppercase">
            Aqui
          </span>
        </aside>
      </div>
    </div>
  );
};
