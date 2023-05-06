import { Manrope } from "next/font/google";

const subtitle = Manrope({ weight: "300", subsets: ["latin"] });

export default function FooterScream() {
  return (
    <div>
      <div className=" h-[100vh] w-full p-20 bg-zinc-900 z-20">
        <h1
          className={`${subtitle.className} text-9xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600`}
        >
          Fale comigo
        </h1>
      </div>
    </div>
  );
}
