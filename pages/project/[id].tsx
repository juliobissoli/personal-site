import { ArrowLeft } from "@phosphor-icons/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProjectDetail: NextPage = (props) => {
  const router = useRouter();

  const [imgUrl, setImg] = useState("");

  useEffect(() => {
    const url = router?.query?.id?.toString() || "";
    setImg(url);
    console.log("veio => ", imgUrl);
  });

  return (
    <section>
      <div className="relative h-[50vh] w-full ">
        <img src={`/${imgUrl}`} className="h-full w-full" />
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
      </div>
      <section className="p-20 w-full flex justify-center items-center">
        <h1 className="text-4xl text-zinc-900">{imgUrl}</h1>
      </section>
    </section>
  );
};

export default ProjectDetail;
