import { Manrope } from "next/font/google";
import Link from "next/link";

const extraBold = Manrope({ weight: "700", subsets: ["latin"] });
const textStrong = Manrope({ weight: "500", subsets: ["latin"] });
const textThin = Manrope({ weight: "300", subsets: ["latin"] });

export default function MainMenu() {
  return (
    <nav className="fixed w-full flex justify-between z-30 px-16 items-center py-2 ">
      <Link
        href={`/`}
        className="text-2xl py-1 hover:border-zinc-900 border-b border-zinc-50 mix-blend-difference	"
      >
        <strong className={textStrong.className}> Juio </strong>
        <span className={textThin.className}> Bissoli</span>
      </Link>
      <button 
      
      className={`${extraBold.className} hover:gap-1 flex py-2`}>
        <span>{"{"}</span>
        <span>menu</span>
        <span>{"}"}</span>
      </button>
    </nav>
  );
}
