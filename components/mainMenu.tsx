import {
  Cube,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Moon,
} from "@phosphor-icons/react";
import {
  Manrope,

} from "next/font/google";
import Link from "next/link";

const extraBold = Manrope({ weight: "700", subsets: ["latin"] });
const textStrong = Manrope({ weight: "700", subsets: ["latin"] });
const textThin = Manrope({ weight: "300", subsets: ["latin"] });

export default function MainMenu() {
  return (
    <nav className="hidden md:flex fixed py-8 md:py-16 h-[100%] lg:w-[5vw]  md:w-[6vw] w-[10vw] backdrop-blur	bg-white/30 flex-col justify-between z-30 items-center">
      <Link href={`/`}>
        <i className="icon icon-logo h-[4.5vh] w-[4.5vh] bg-zinc-950"></i>
      </Link>

      <ul className="flex flex-col items-center gap-8 text-zinc-700 text-zinc-700">
        <li>
          <Link href="projects">
            <button className="-rotate-90  whitespace-nowrap text-sm tracking-wider uppercase">
              Projetos
            </button>
          </Link>
        </li>
        <li>•</li>
        <Link href="about">
          <li>
            <button className="-rotate-90  whitespace-nowrap text-sm tracking-wider uppercase">
              Sobre
            </button>
          </li>
        </Link>
      </ul>

      <button className="text-xl text-zinc-500 h-10 w-10 p-2 hover:bg-zinc-300 rounded-full border">
        <Moon size={20} />
      </button>

    </nav>
  );
}
