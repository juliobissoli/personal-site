import { Manrope } from "next/font/google";
import Link from "next/link";

interface Props {
  projectImg: string;
  title: string;
  year: string;
  id: string;
}

const textBold = Manrope({ weight: "700", subsets: ["latin"] });
const textRegular = Manrope({ weight: "400", subsets: ["latin"] });

const CardProject: React.FC<Props> = ({ projectImg, title, year, id }) => {
  return (
    <div className="w-[100vw] md:w-[90vw] h-[100vh]">
      <header className="flex flex-col md:flex-row justify-between items-end mb-2 border-b px-4 md:px-8 lg:px-16 p-5 lg:pt-16 pb-4">
        <h3 className={`text-4xl text-zinc-900 ${textBold.className}`}>
          {title}
        </h3>
        <span className={`text-2xl text-zinc-500 ${textRegular.className}`}>
          {year}
        </span>
      </header>
      <Link href={`/projects/${id}`}>
        <div id={id} className="px-4 md:px-8 lg:px-16 mt-8 cursor-show-more">
          <img src={projectImg} className="h-[75vh] w-full  object-cover" />
        </div>
      </Link>
    </div>
  );
};

export default CardProject;
