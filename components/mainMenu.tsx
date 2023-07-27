import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Crete_Round, EB_Garamond, Inter, Kadwa, Manrope, Raleway, Sanchez, Sora } from "next/font/google";
import Link from "next/link";
// import { LinkedinLogo, BiLogoGithub } from 'react-icons/bi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const extraBold = Manrope({ weight: "700", subsets: ["latin"] });
const textStrong = Manrope({ weight: "700", subsets: ["latin"] });
const textThin = Manrope({ weight: "300", subsets: ["latin"] });

export default function MainMenu() {
  return (
    <nav className="fixed h-[100%] lg:w-[6vw] backdrop-blur	bg-white/30 flex flex-col justify-between z-30 items-center">
      <Link
        href={`/`}
        className="text-xl py-16 mx-0  flex gap-1 rotate-90 hover:border-zinc-950 border-b border-zinc-50 "
      >
        <strong className={textStrong.className}> Julio </strong>
        <span className={textThin.className}> Bissoli</span>
      </Link>

      <ul className="flex flex-col items-center gap-4">
        <li>
          <button className="text-zinc-700 text-xl">
            {/* <GithubLogo size={24} weight="light" /> */}
            {/* <BiLogoGithub /> */}
            <FaGithub />
          </button>
        </li>
        <li>
          <button className="text-zinc-700  text-xl">
            {/* <LinkedinLogo size={24} weight="light" /> */}
            <FaLinkedinIn />
          </button>
        </li>
        {/* <li>
          <button className="text-zinc-900">
            <InstagramLogo size={24} weight="light" />
          </button>
        </li> */}
        <li>
          <div className="h-[10vh] w-[2px] bg-zinc-700"></div>
        </li>
      </ul>
    </nav>
  );
}
