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
    <main>
      <section className="w-full flex">
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
        <aside className="p-20 w-1/2 h-[100vh] flex items-center">
          <div>
            <Timer size={48} weight="light" />{" "}
            <h1 className={`text-4xl text-zinc-900 ${subtitle.className}`}>
              {imgUrl}
            </h1>
          </div>
        </aside>
      </section>
      <section className="h-[100vh] bg-zinc-900">
        <div className="w-full flex justify-center ">
          <span className="text-2xl  text-center text-white w-3/5 font-thin p-8">
            O que é o projeto, tipo um pequeno slogam, porque ele foi
            desenvolvido, qual era o intuído, projeto pessoal, freelancer
          </span>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
