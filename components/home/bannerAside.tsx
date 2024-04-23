import useOnScreen from "@/utils/isVisible";
import { Manrope } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const subtitle = Manrope({ weight: "400", subsets: ["latin"] });

interface Props {
  title: string;
  year: string;
  imagePath: string;
}
// codtime-splash-img.png

const BannerAside: React.FC<Props> = ({ title, year, imagePath }) => {
  const [mousePos, setMousePos] = useState({});
  const [btnFloatIsVisible, setMouseIsVisible] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const coords = { x: event.clientX, y: event.clientY };
      const din = ref.current?.getBoundingClientRect();
      setMousePos(coords);
      if (din) {
        const isInset =
          coords.x < din?.right &&
          coords.x > din?.left &&
          coords.y < din.bottom &&
          coords.y > din.top;

        let btn = document.getElementById(`btn-float-${imagePath}`);
        if (btn) {
          if (isInset) {
            setMouseIsVisible(true);
            btn.style.left = coords.x + "px";
            btn.style.top = coords.y + "px";
            btn.style.display = "inline-block";
          }

          else {
            setMouseIsVisible(true);
            btn.style.display = "none";

          }
        }

        // if (!btnFloatIsVisible && isInset) {

        // }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <>
      {/*
    // <Link href={`/projects/${imagePath}`}>
     <div className="" onClick={
      () => console.log('veio')
    }> */}
      <button
        className=" w-20 h-20  absolute  hidden"
        id={`btn-float-${imagePath}`}
      >
        <span className="bg-zinc-900 z-10 rounded-full w-full h-full absolute flex justify-center items-center text-white">
          Ver mais
        </span>
      </button>
      <div className="relative h-[100vh] w-full " ref={ref}>
        <img src={imagePath} className="h-full w-full  object-cover" />
        <div className="absolute text-white top-0  w-full h-full opacity-70 bg-gradient-to-t from-transparent to-zinc-900 from-60%">
          <div
            className={`${subtitle.className} w-ful flex justify-start flex-col p-8`}
          >
            <h1 className="text-2xl">{title}</h1>
            <span className="text-sm">({year})</span>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </Link> */}
    </>
  );
};

export default BannerAside;
