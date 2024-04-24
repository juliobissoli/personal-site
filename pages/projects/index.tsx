import { NextPage } from "next";
import ProjectsData from "../../data/projects.json";
import Link from "next/link";


const ProjectsPage: NextPage = () => {


    const projectsData = ProjectsData;

    return (
        <main className="md:mx-[5vw]  relative md:border flex-1  min-h-[100vh]">
            <header className="mt-4 md:mt-8  border-b flex items-end">
                <h1 className="p-4 md:p-8 lg:mx-12  xl:mx-16 text-4xl md:text-5xl text-zinc-900 ">
                    Projetos
                </h1>
            </header>

            <ul className="grid grid-cols-1 md:grid-cols-2">
                {
                    projectsData.map(
                        (project, i) => (
                            <Link href={`/projects/${project.id}`} key={i}>
                                <li className={`h-[60vh] p-16 border-b hover:bg-zinc-50 ${i % 2 == - 0 ? 'border-r' : ''}`}>
                                    <div className="px-8">
                                        <h2 className="text-3xl">{project.title}</h2>
                                        <div className="rounded-xl h-[40vh] w-full bg-zinc-200 overflow-auto">
                                            <img src={project.imagePath} className="h-full w-full  object-cover" />

                                        </div>
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