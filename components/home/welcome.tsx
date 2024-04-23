import { ArrowArcRight, ArrowDown, ArrowRight } from "@phosphor-icons/react";
import { Sora, Manrope } from "next/font/google";
import { CompaniesLogos } from "./companiesLogos";

const textStrong = Sora({ weight: "700", subsets: ["latin"] });
const textThin = Manrope({ weight: "400", subsets: ["latin"] });

interface Props {
  clickShowMore: () => void;
}

export const WelcomeHome: React.FC<Props> = ({ clickShowMore }) => {
  return (
    <div className="w-[112vw] md:w-[108vw] lg:w-[105vw] h-[100vh] lg:pl-[5vw]  md:pl-[6vw] pl-[10vw]">
      <div className="flex justify-between h-full border-l">

        <aside className=" h-full md:w-[108vw] lg:w-[105vw] ">
          {/* <header className="pt-8 md:pt-16 "> */}
          <div className="w-full h max-w-[1624px] h-full mx-auto p-4 flex-1 relative">

            <div className="max-w-[1140px] mt-[25vh]">
              <h1 className={`fade-in text-5xl gap-2 text-zinc-600 w-full flex flex-wrap tracking-tight  sm:text-7xl `}>
                <span className={`${textStrong.className}`}>Olá,</span> <span className={textStrong.className}>sou o</span> <span className={textStrong.className}>Julio,</span><span className={textStrong.className}>desenvolvedor</span>
                <span className={textStrong.className}>de software e</span>
                <span className={`bg-gradient-to-br bg-clip-text from-orange-500 to-violet-600 text-transparent h-6xl ${textStrong.className}`}>
                  UI/UX design.
                </span>

              </h1>
              <ul className="flex gap-3 mt-3 text-zinc-700 text-zinc-700 mx-1">
                <li>
                  <button className=" whitespace-nowrap text-xs md:text-sm tracking-wider uppercase">
                    <a href="mailto:juliobissoli33@gmail.com" target="_blank">
                      Email
                    </a>
                  </button>
                </li>
                <li>•</li>
                <li>
                  <button className=" whitespace-nowrap text-xs md:text-sm tracking-wider uppercase">
                    <a href="https://github.com/juliobissoli" target="_blank">
                      Github
                    </a>
                  </button>
                </li>
                <li>•</li>
                <li>
                  <button className=" whitespace-nowrap text-xs md:text-sm tracking-wider uppercase">
                    <a
                      href="https://www.linkedin.com/in/julio-bissoli-752a231a3/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </button>
                </li>
              </ul>
            </div>
            <footer
              className="absolute bottom-0 right-0 m-16 "
            >
              <button
                onClick={clickShowMore}
                className={`flex items-center gap-3 border rounded-full px-4 py-2 ${textThin.className} text-zinc-200 bg-zinc-900 hover:bg-zinc-50 hover:text-zinc-900 text-md uppercase`}>
                <span className={textThin.className}> Principais trabalhos </span>
                <div className="-rotate-90">
                  <ArrowDown className=" text-md animate-bounce"  />
                </div>
              </button>
            </footer>
          </div>

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
