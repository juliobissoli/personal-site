import FooterScream from "@/components/footerScream";
import MainMenu from "@/components/mainMenu";
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

  const projectDetail = {
    year: ["2021 - 2022"],
    tasks: ["UI/UX", "Desenvolvimento do sistema web", "Integração com GitLab"],
    tools: ["Figma", "VueJs", "Insomnia", "Docker"],
  };

  const entities = [
    { value: "year", label: "Ano" },
    { value: "tasks", label: "Atividades" },
    { value: "tools", label: "Ferramentas" },
  ];

  useEffect(() => {
    const url = router?.query?.id?.toString() || "";
    setImg(url);
    console.log("veio => ", imgUrl);
  });

  return (
    <main className="scroller overflow-y-hidden	">
      <section className="flex  h-[100vh] scroll-child">
        <aside className="relative h-[100vh] w-1/2 ">
          <button className="w-12 h-12 rounded-full absolute top-16 left-16 z-10 bg-white flex items-center justify-center border">
            <Link href={`/`} className="flex gap-2">
              <ArrowLeft size={22} />
            </Link>
          </button>
          <img
            src={`/${imgUrl}`}
            className="h-full w-full object-cover border-0"
          />
          <div className="absolute  top-0">
            <div className={`w-ful flex justify-start flex-col p-8`}></div>
          </div>
        </aside>
        <aside className="w-1/2 h-full relative justify-start flex items-center">
          <div className="fixed px-8 mt-[-62px]">
            <Timer size={48} weight="light" />{" "}
            <h1 className={`text-8xl  text-zinc-900 ${subtitle.className}`}>
              ERP-Linhagua
            </h1>
          </div>
        </aside>
      </section>
      <section className="scroll-child flex justify-between">
        <div className=" w-1/2    ">
          <div className="w-full scroll-child ">
            <aside className="h-[100vh] w-full p-8 flex justify-center items-center">
              <span
                className={`text-4xl text-center w-4/6 text-zinc-700 font-thin ${subtitle.className}`}
              >
                “O primeiro!! Esse sistema aulixia na gerencia de toda produção
                de uma emporesa envasodoa de água mineral”
              </span>
            </aside>
          </div>
        </div>
        <div className="w-1/2" />
      </section>

      <section className="scroll-child sticky ">
        <div className=" w-[100wv] h-[100vh] bg-zinc-50 p-20 ">
          <div 
          className="page-wrapper p-[1vh] scroll-m-3	h-[80vh] overflow-y-scroll relative">
            <div className={`${subtitle.className} flex relative h-[135vh]`}>
              <aside className="w-3/5">
                <div className="w-full h-[45vh] rounded-xl bg-zinc-100 border mb-12 "></div>
                <div className="w-full h-[45vh] rounded-xl bg-zinc-100 border mb-12  "></div>
                <div className="w-full h-[45vh] rounded-xl bg-zinc-100 border mb-12 "></div>
              </aside>

              <aside className="w-2/5 pl-16 sticky top-0  h-[50vh]">

                {entities.map((entity, i) => (
                  <div className={`mb-8 ${subtitle.className}`} key={i}>
                    <h3
                      className={`${subtitle.className} text-2xl py-1 text-sm text-zinc-500 w-full border-b border-zinc-900`}
                    >
                      {entity.label}
                    </h3>
                    <ul>
                      {(projectDetail as any)[entity.value].map((el: any, j: number) => (
                        <li className={`${subtitle.className} text-2xl py-1`} key={j}>
                          {el}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-child sticky">
        <FooterScream />
      </section>
    </main>
 
  );
};

export default ProjectDetail;
