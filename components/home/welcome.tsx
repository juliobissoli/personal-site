import { ArrowArcRight, ArrowDown, ArrowRight } from "@phosphor-icons/react";
import { Sora, Manrope } from "next/font/google";
import { CompaniesLogos } from "./companiesLogos";

const textThin = Manrope({ subsets: ["latin"] });

interface Props {
  clickShowMore: () => void;
}

export const WelcomeHome: React.FC<Props> = ({ clickShowMore }) => {
  return (
    <div className="w-[100vw] md:w-[105vw] h-[100vh] lg:pl-[5vw]   pl-0 md:pl-[6vw]">
      <div className="relative flex justify-between h-full border-0  md: border-1 border-l-primary">



        <aside className=" h-full w-full ">
          {/* <header className="pt-8 md:pt-16 "> */}
          <div className="w-full   max-w-[1624px] mx-auto  flex-1 ">

            <div className="overflow-hidden flex flex-col justify-between w-full p-8  h-[70vh] lg:h-[80vh] mt-10 rounded-2xl relative">
              {/* <div className="absolute w-[100vh] h-[100vh] ">
                <img src="/noise.png" className="w-full h-full opacity-10   " />
              </div> */}

              <header>
                <h1 className={`${textThin.className} fade-in text-4xl gap-2 text-secondary w-full flex flex-wrap tracking-tight  `}>
                  Julio Bissoli
                </h1>
                <h2 className="uppercase text-zinc-500">Desenvolvedor e Design</h2>
              </header>

              <div className='w-full flex justify-end'>
                <div className="w-[240px] font-semibold tracking-wide  text-justify uppercase text-box text-sm">
                  <div className={` ${textThin.className}  h-[4px] w-1/3 bg-black dark:bg-white mb-4`}></div>
                  Desenvolvedor de software apaixonado por criar 
                  sistemas com interfaces simples e intuitivas que
                  proporcionam uma excelente experiência ao usuário.
                </div>
              </div>
            </div>
            <footer className="w-full flex justify-end mt-8 lg:mt-16 px-8 ">
              <button
                onClick={clickShowMore}
                className={`flex items-center gap-3 btn-secondary`}>
                <span className={textThin.className}> Principais trabalhos </span>
                <div className="rotate-0 md:-rotate-90">
                  <ArrowDown className=" text-md animate-bounce" />
                </div>
              </button>
            </footer>
          </div>

        </aside>
        <aside className="border-l-primary h-full lg:w-[5vw]  md:w-[8vw] w-[12vw] hidden md:flex">
          <div className="h-full">
            <CompaniesLogos />
          </div>
        </aside>
      </div>
    </div>
  );
};
