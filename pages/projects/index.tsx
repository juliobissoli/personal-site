import { NextPage } from "next";
import ProjectsData from "../../data/projects.json";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";


const ProjectsPage: NextPage = () => {


    const projectsData = ProjectsData;

    return (
        <main className="md:mx-[5vw]  relative border-primary border-0 md:border-1flex-1  min-h-[100vh]">
            <header className="mt-4 md:mt-8  border-b-primary flex items-end">
                <h1 className="p-4 md:p-8 lg:mx-12  xl:mx-16 text-4xl md:text-5xl ">
                    Projetos
                </h1>
            </header>

            <ul className="grid grid-cols-1 md:grid-cols-2">
                {
                    projectsData.map(
                        (project, i) => (
                            <Link href={`/projects/${project.id}`} key={i}>
                                <li className={`h-[70vh] p-4 md:p-16 border-b-primary hover:bg-zinc-50 dark:hover:bg-zinc-900 ${i % 2 == - 0 ? 'border-r-primary' : ''}`}>
                                    <div className="mx-0 md:px-8 space-y-1">
                                        <div className="flex justify-between ">
                                            <h2 className="text-3xl text-zinc-500">{project.title}</h2>
                                            <button className=" btn-secondary flex text-sm gap-2">
                                                <span className=" hidden md:block">Ver detalhes</span>
                                                <ArrowUpRight size={18} />
                                            </button>
                                        </div>
                                        <div className="rounded-xl h-[40vh] w-full border-primary overflow-auto">
                                            <img src={project.imagePath} className="h-full w-full  object-cover" />
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-md text-justify text-zinc-500 tracking-wide font-light line-clamp-3	">{project.subtitle}
                                            </p>
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