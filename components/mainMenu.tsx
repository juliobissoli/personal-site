import { Cube, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Crete_Round, EB_Garamond, Inter, Kadwa, Manrope, Raleway, Sanchez, Sora } from "next/font/google";
import Link from "next/link";
// import { LinkedinLogo, BiLogoGithub } from 'react-icons/bi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const extraBold = Manrope({ weight: "700", subsets: ["latin"] });
const textStrong = Manrope({ weight: "700", subsets: ["latin"] });
const textThin = Manrope({ weight: "300", subsets: ["latin"] });

export default function MainMenu() {
  return (
    <nav className="fixed py-16 h-[100%] lg:w-[5vw]  md:w-[6vw] w-[10vw] backdrop-blur	bg-white/30 flex flex-col justify-between z-30 items-center">
 
      <Link   href={`/`}> 
        <i className="icon icon-logo h-[5vh] w-[5vh] bg-zinc-950"></i>
      </Link>

      <ul className="flex flex-col items-center gap-6 text-zinc-700 text-zinc-700">
      <li>
          <button className="-rotate-90  whitespace-nowrap sm:text-xs md:text-sm tracking-wider uppercase">
            Email
          </button>
        </li>
        <li>•</li>
        <li>
          <button className="-rotate-90  whitespace-nowrap sm:text-xs md:text-sm tracking-wider uppercase">
            Github
          </button>
        </li>
        <li>•</li>
        <li>
          <button className="-rotate-90  whitespace-nowrap sm:text-xs md:text-sm tracking-wider uppercase">
            LinkedIn
          </button>
        </li>
      </ul>
    </nav>
  );
}
