import { NextPage } from "next";
import ProjectsData from "../../data/projects.json";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";


const ProjectsPage: NextPage = () => {


    const projectsData = ProjectsData.sort((a, b) => a.priority - b.priority);

    const tools = Array.from(new Set(projectsData.map(project => project.tools).flat()));

    return (
        <main className="md:mx-[5vw]  relative border-primary border-0 md:border-1flex-1  min-h-[100vh]">
            <header className="mt-4 md:mt-8  border-b-primary flex items-end">
                <h1 className="p-4 md:p-8 lg:mx-12  xl:mx-16 text-4xl md:text-5xl ">
                    Projetos
                </h1>
            </header>

            {/* <div className="border-b-primary px-4 md:px-8 lg:px-12 xl:px-24 py-4 w-full">
                <ul className="inline-flex justify-end flex-wrap gap-2 overflow-x-auto  scroll-inherit-display">
                    {
                        tools.map((tool, i) => (
                            <li key={i} className="badge">{tool}</li>
                        ))
                    }
                </ul>
            </div> */}

            <ul className="grid grid-cols-1 md:grid-cols-2">
                {
                    projectsData.map(
                        (project, i) => (
                            <Link href={`/projects/${project.id}`} scroll={false} key={i}>
                                <li className={`md:h-[600px] overflow-auto p-4 pt-8 xl:pt-16 md:px-8 xl:px-16 border-b-primary hover:bg-zinc-50 dark:hover:bg-zinc-900 ${i % 2 == - 0 ? 'border-r-primary' : ''}`}>
                                    <div className="mx-0 md:px-8 space-y-1">
                                        <div className="flex justify-between ">
                                            <h2 className="text-3xl">{project.title}</h2>
                                            <button className=" btn-secondary flex text-sm gap-2">
                                                <span className=" hidden xl:block">Ver detalhes</span>
                                                <ArrowUpRight size={18} />
                                            </button>
                                        </div>

                                        <div className="relative rounded-xl h-[40vh] w-full border-primary overflow-auto show-hover">
                                            <img src={project.imagePath} className="h-full w-full  object-cover" />

                                            <div className="absolute  show-hover-item flex items-center justify-center  w-full h-full bg-black top-0 backdrop-blur	bg-white/40 dark:bg-black/40 p-8">
                                                <p className="text-md text-justify  tracking-wide font-light line-clamp-3	">{project.subtitle}</p>
                                            </div>

                                        </div>
                                        <ul className="flex flex-wrap justify-end gap-2 mt-2">
                                            {
                                                project.tools.map((tool, i) => (
                                                    <li key={i} className="badge">{tool}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </li>
                            </Link>
                        )
                    )
                }
            </ul>

        </main >

    )
}


export default ProjectsPage;