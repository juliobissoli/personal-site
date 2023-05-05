import { ArrowLeft, Timer } from "@phosphor-icons/react";
import { NextPage } from "next";
import { Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const subtitle = Manrope({ weight: "400", subsets: ["latin"] });

const ProjectDetail: NextPage = (props) => {
  const router = useRouter();

  const [imgUrl, setImg] = useState("");

  useEffect(() => {
    const url = router?.query?.id?.toString() || "";
    setImg(url);
    console.log("veio => ", imgUrl);
  });

  return (
    <main className="scroller overflow-y-hidden	">
      {/* <MainMenu></MainMenu> */}
      <section className="flex  h-[100vh] scroll-child">
        <aside className="relative h-[100vh] w-1/2 ">
          <img
            src={`/${imgUrl}`}
            className="h-full w-full object-cover border-0"
          />
          <div className="absolute text-white top-0  w-full h-full opacity-70 bg-gradient-to-t from-transparent to-zinc-900 from-60%">
            <div className={`w-ful flex justify-start flex-col p-8`}>
              <header className="w-full ">
                <Link href={`/`} className="flex gap-2">
                  <ArrowLeft size={22} />
                  Voltar
                </Link>
              </header>
            </div>
          </div>
        </aside>
        <aside className="w-1/2 h-full relative justify-start flex ">
          <div className="fixed p-8 top-[30%]">
            <Timer size={48} weight="light" />{" "}
            <h1 className={`text-4xl text-zinc-900 ${subtitle.className}`}>
              {imgUrl}
            </h1>
          </div>
        </aside>
      </section>
      <section className="scroll-child flex justify-between">
        <div className=" w-1/2    ">
          <div className="w-full scroll-child ">
            <aside className="h-[100vh] w-full p-8 flex justify-center items-center">
              <span className="text-2xl text-center">
                descrição do projeto, descrição do projeto, descrição do projeto...
              </span>
            </aside>
          </div>
        </div>
        <div className="w-1/2" />
      </section>

      <section className="scroll-child sticky">
        <div className=" h-[100vh] w-[100wv] bg-red-200 p-20">
          <h1 className={`${subtitle.className} text-4xl `}>Sobre o projeto</h1>
        </div>
      </section>
    </main>
    // <main>
    //   <section className="w-full flex">
    // <aside className="relative h-[100vh] w-1/2 ">
    //   <img
    //     src={`/${imgUrl}`}
    //     className="h-full w-full object-cover border-0"
    //   />
    //   <div className="absolute text-white top-0  w-full h-full opacity-70 bg-gradient-to-t from-transparent to-zinc-900 from-60%">
    //     <div className={`w-ful flex justify-start flex-col p-8`}>
    //       <header className="w-full ">
    //         <Link href={`/`} className="flex gap-2">
    //           <ArrowLeft size={22} />
    //           Voltar
    //         </Link>
    //       </header>
    //     </div>
    //   </div>
    // </aside>
    //     <aside className="p-20 w-1/2 h-[100vh] flex items-center">
    // <div>
    //   <Timer size={48} weight="light" />{" "}
    //   <h1 className={`text-4xl text-zinc-900 ${subtitle.className}`}>
    //     {imgUrl}
    //   </h1>
    // </div>
    //     </aside>
    //   </section>
    //   <section className="h-[100vh] bg-zinc-900">
    //     <div className="w-full flex justify-center ">
    //       <span className="text-2xl  text-center text-white w-3/5 font-thin p-8">
    //         O que é o projeto, tipo um pequeno slogam, porque ele foi
    //         desenvolvido, qual era o intuído, projeto pessoal, freelancer
    //       </span>
    //     </div>
    //   </section>
    // </main>
  );
};

export default ProjectDetail;
