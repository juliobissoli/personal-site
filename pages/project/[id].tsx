import { BannerAnimate } from "@/components/bannerAnimate";
import FooterScream from "@/components/footerScream";
import MainMenu from "@/components/mainMenu";
import { ArrowLeft, Timer } from "@phosphor-icons/react";
import { NextPage } from "next";
import { Manrope, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProjectsData from "../../data/projects.json";

const textBold = Poppins({ weight: "600", subsets: ["latin"] });
const textRegular = Manrope({ weight: "400", subsets: ["latin"] });
const textLight = Manrope({ weight: "200", subsets: ["latin"] });

const ProjectDetail: NextPage = (props) => {
  const projectsMap = new Map(ProjectsData.map((el) => [el.id, el]));

  const router = useRouter();

  const [imgUrl, setImg] = useState("");

  const defaultProjectData = {
    id: "",
    title: "",
    year: "",
    imagePath: "",
    images: [],
    description: "",
    activities: [],
    tools: [],
  };

  const [projectData, setProjectData] = useState(defaultProjectData);

  useEffect(() => {
    const id = router?.query?.id?.toString() || "";
    // setImg(url);
    const project = projectsMap.get(id);
    if (project) {
      setProjectData(project);
    }
    console.log("veio => ", projectData);
  });

  return (
    <div className="flex justify-center  pl-12 md:pl-0">
      <main className="w-[90vw] md:w-[80vw] relative border">
        <Link
          href={`/`}
          className="my-4 rounded-full  backdrop-blur	bg-white/30 fixed mx-8  p-2 z-10"
        >
          <ArrowLeft className="text-2xl" weight="thin" />
        </Link>
        <header className=" w-full flex flex-col border-b px-8 pb-4  sticky- top-0 ">
          <div className="flex flex-col md:flex-row justify-between mt-16">
            <h1 className={`${textBold.className} text-4xl`}>
              {projectData.title}
            </h1>
            <h1 className={`${textLight.className} text-4xl`}>
              {projectData.year}
            </h1>
          </div>
        </header>

        <section className="w-full h-[80vh] p-8  sticky- top-0 bg-white">
          <BannerAnimate projectId={projectData.imagePath} />
        </section>

        <section
          className={`${textBold.className} text-zinc-500 my-16 text-[4vw] p-8  sticky- top-0 flex`}
        >
          <span>{'"'}</span>
          <span className={textBold.className}>{projectData.description}{'"'}</span>
        </section>

        <span
          className={`px-4 md:px-8 ${textRegular.className} uppercase text-zinc-500 `}
        >
          Mais detalhes:
        </span>
        <section className="flex flex-col-reverse md:flex-row p-4 md:p-8 mt-2 pt-16  border-t sticky- top-0 bg-white">
          <aside className="w-full md:w-3/5 flex flex-col gap-16">
            {projectData.images.map((el) => (
              <div key={el} className=" border rounded-sm">
                <img
                  src={`/${el}`}
                  className="fade-in h-full w-full object-cover border-0  rounded-sm"
                />
              </div>
            ))}
          </aside>

          <aside className="px-2 md:px-8 w-full md:w-2/5 flex flex-col ">
            <div className="flex flex-col mb-8">
              <small
                className={`${textRegular.className} border-b border-zinc-800 text-zinc-500 text-sm`}
              >
                {" "}
                Ano:
              </small>
              <span className={`${textRegular.className} text-2xl py-2`}>
                {" "}
                {projectData.year}
              </span>
            </div>

            <div className="flex flex-col mb-8">
              <small
                className={`${textRegular.className} border-b border-zinc-800 text-zinc-500 text-sm`}
              >
                {" "}
                Atividades:
              </small>
              {projectData.activities.map((el) => (
                <span
                  className={`${textRegular.className} text-2xl py-2`}
                  key={el}
                >
                  {" "}
                  {el}
                </span>
              ))}
            </div>
            <div className="flex flex-col mb-8">
              <small
                className={`${textRegular.className} border-b border-zinc-800 text-zinc-500 text-sm`}
              >
                {" "}
                Ferramentas:
              </small>
              {projectData.tools.map((el) => (
                <span
                  className={`${textRegular.className} text-2xl py-2`}
                  key={el}
                >
                  {" "}
                  {el}
                </span>
              ))}
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;
