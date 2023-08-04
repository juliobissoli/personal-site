import { ArrowArcRight, ArrowRight } from "@phosphor-icons/react";
import { Inter, Manrope } from "next/font/google";
import { CompaniesLogos } from "./companiesLogos";

const textStrong = Manrope({ weight: "800", subsets: ["latin"] });
const textThin = Manrope({ weight: "300", subsets: ["latin"] });

export const WelcomeHome = () => {
  return (
    <div className="w-[112vw] md:w-[108vw] lg:w-[105vw] h-[100vh] lg:pl-[5vw]  md:pl-[6vw] pl-[10vw]">
      <div className="flex justify-between h-full border-l">
        <aside className=" h-full md:w-[108vw] lg:w-[105vw] flex flex-col justify-between">
          {/* <header className="pt-8 md:pt-16 "> */}
          <header className="h-[88px] md:h-[120px] border-b flex items-end">
            <h3 className="p-4 text-2xl text-zinc-900 ">
              <strong className={textStrong.className}> Julio </strong>
              <span className={textThin.className}> Bissoli</span>
            </h3>
          </header>
          <h1
            className={`${textStrong.className} px-4 md:px-16 fade-in text-[10vw] sm:text-[20vw] md:text-[10vw] lg:text-[8vw] w-[80vw] w-[90vw] lg:w-[80vw] flex flex-wrap text-center text-zinc-700`}
          >
            Desenvolvedor {"&"}
            <span
              className={`${textStrong.className}font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-700 lg:mt-[-6vh]`}
            >
              UI/UX design
            </span>{" "}
          </h1>

          <span className="text-3xl px-4 text-zinc-500">
            {/* Contruindo sua ideia desde a concepção até produto final */}
          </span>
          <footer
            className={`${textThin.className} h-[88px] md:h-[120px]  text-zinc-600 text-md uppercase w-full flex w-full justify-end text-right px-4   border-t`}
          >
            <div className="mt-4">
              <a className="flex items-center gap-3 ">
                <span className=""> Principais trabalhos </span>
                <ArrowRight className="text-md" weight="thin" />
              </a>
            </div>
          </footer>
        </aside>
        <aside className="border-l h-full lg:w-[5vw]  md:w-[8vw] w-[12vw] ">
          <div className="h-full">
            <CompaniesLogos />
          </div>
        </aside>
      </div>
    </div>
  );
};
