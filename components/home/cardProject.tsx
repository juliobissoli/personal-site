import { Manrope } from "next/font/google";
import Link from "next/link";

interface Props {
  project: any
}

const textBold = Manrope({ weight: "700", subsets: ["latin"] });
const textRegular = Manrope({ weight: "400", subsets: ["latin"] });

const CardProject: React.FC<Props> = ({ project }) => {
  return (
    <div className="w-[100vw] md:w-[90vw] min-h-[100vh]">
      <div className=" flex col md:flex-row justify-between items-end mb-2 border-b-primary px-4 md:px-8 lg:px-32 p-5 lg:pt-16 pb-4">
        <h3 className="text-4xl">{project.title}</h3>
        <div className="w-1/3 fle flex-wra gap-x-2 line-clamp-1 h-12 text-zinc-500">
          {/* <article className="inline-flex">

          {project.subtitle}
          </article> */}
          {/* {
            project.subtitle.split(" ").map((text: string, i: number) => (
              <span key={i}>{text}</span>
            ))
          } */}
        </div>
        {/* <div className="w-full md:w-1/3 inline-block">
        </div> */}
      </div>
      <div id={project.id} className="py-2 gap-16 px-4 md:px-8 lg:px-32 space-y-4">
        <div className="flex flex-col md:flex-row gap-1 items-end md:justify-between ">
          <div>
            <ul className="flex flex-wrap gap-2 ">
              {project.tools.map((el: any, i: number) => (
                <li key={i} className="badge">{el}</li>
              ))}

            </ul>
          </div>

          <Link href={`/projects/${project.id}`}>
            <button className="btn-primary text-sm">Detalhes do projeto</button>
          </Link>

        </div>
        <img src={'/' + project.imagePath} className="h-[75vh] w-full  object-cover rounded-lg " />

      </div>
    </div>
  );
};

export default CardProject;
