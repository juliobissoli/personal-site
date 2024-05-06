import { BannerAnimate } from "@/components/bannerAnimate";
import { NextPage } from "next";
import { Manrope, Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProjectsData from "../../data/projects.json";
import { format, differenceInMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";
import BackButton from "@/components/backButton";
import { space } from "postcss/lib/list";
import Markdown from "markdown-to-jsx";

const ProjectDetail: NextPage = (props) => {
  const projectsMap = new Map(ProjectsData.map((el) => [el.id, el]));

  const router = useRouter();

  const defaultProjectData: any = {
    id: "",
    title: "projetos",
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
  });

  return (
    <>
      <Head>
        <title> {projectData.title} | Julio Bissoli</title>
        <link rel="icon" href="/logo.svg" />
        <meta property="og:title" content={`${projectData.title} | Julio Bissoli`} key="title" />
        <meta property="og:description" content="Olá, sou Juio Bissoli, e desenvolvi esse projeto"></meta>
        <meta name="author" content="Julio Bissoli"></meta>
        <meta property="og:image" content={`https://raw.githubusercontent.com/juliobissoli/personal-site/main/public/${projectData.imagePath}`} />

        <meta property="twitter:image" content={`https://raw.githubusercontent.com/juliobissoli/personal-site/main/public/${projectData.imagePath}`} ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content={`${projectData.title} | Julio Bissoli`} ></meta>
        <meta name="twitter:description" content="Olá, sou Juio Bissoli, desenvolvedor de software e UI/UX design"></meta>
      </Head>

      <main className="md:mx-[5vw]  relative border-x-primary flex-1  min-h-[100vh]">

        <header className="mt-4 md:mt-8  border-b-primary ex-col">
          <div className="px-4 md:px-8  md:mx-16">
            <BackButton />
          </div>
          <div className="flex">

            <h1 className="p-4 md:px-8  md:mx-16 text-4xl md:text-5xl ">
              {projectData.title}
            </h1>
        
          </div>
        </header>

        <section className="w-full h-[70vh] mt-16 md:px-16 p-4 md:px-16   ">
          <div className="px-0 md:px-8 h-full ">
            <BannerAnimate projectId={projectData.imagePath} />
          </div>
        </section>



        <div className="p-4 md:p-16 mt-2 pt-16">
          <section className="p-0 md:p-8 flex flex-col-reverse md:flex-row sticky md:top-0">
            <aside className="py-4 w-full md:w-3/5 flex flex-col gap-16  z-10 bg-white dark:bg-zinc-950">
              <div className="uppercase text-zinc-500 text-sm border-b-primary">
                Mais detalhes
              </div>
              <div className="text-justify space-y-4 text-xl md:text-3xl text-secondary tracking-wide font-light">
                 <Markdown>
                   {projectData.description}
                 </Markdown>
           
              </div>

              <div className="py-16 space-y-8">
                {projectData.images.map((el: any) => (
                  <div key={el} className=" border-primary rounded-xl overflow-auto">
                    <img
                      src={`/${el}`}
                      className="fade-in h-full w-full object-cover border-0  "
                    />
                  </div>
                ))}
              </div>
            </aside>

            <aside className="px-2 md:px-8 w-full md:w-2/5 ml-0 md:ml-16 flex flex-col md:sticky top-0 ">

              <div className="md:sticky top-0 py-4">


                <div className="flex flex-col mb-8">
                  <small className="border-b-primary text-zinc-500 text-sm">
                    Atividades:
                  </small>

                  <ul className="flex flex-wrap gap-2 mt-2">
                    {projectData.activities.map((el: any, i: number) => (
                      <li key={i} className="badge">{el}</li>
                    ))}
                  </ul>

                </div>
                <div className=" mb-8">
                  <p className="border-b-primary text-zinc-500 text-sm">  Ferramentas:</p>

                  <ul className="flex flex-wrap gap-2 mt-2">
                    {projectData.tools.map((el: any, i: number) => (
                      <li key={i} className="badge">{el}</li>
                    ))}
                  </ul>

                </div>

                {
                  (projectData.urlView || projectData.urlRepository) &&
                  <div className="flex flex-col mb-8">
                    <small className="border-b-primary text-zinc-500 text-sm">
                      Link:
                    </small>
                    <div className="flex mt-2 gap-2">
                      {projectData.urlView && <a href={projectData.urlView} target="_blank" className="btn-primary">visitar site</a>}
                      {projectData.urlRepository && <a href={projectData.urlRepository} target="_blank" className="btn-primary">Repositório</a>}
                    </div>
                  </div>
                }
              </div>

            </aside>
          </section>
        </div>

      </main>
    </>
  );
};

export default ProjectDetail;
