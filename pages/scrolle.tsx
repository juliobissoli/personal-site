import { Manrope } from "next/font/google";
import { Keyframes, Scroll } from "scrollex";

const poppins = Manrope({ weight: "800", subsets: ["latin"] });

const keyframes: Record<string, Keyframes> = {
  heading: ({ section }) => ({
    [section.topAt("container-top")]: {
      translateX: 0,
    },
    [section.bottomAt("container-top")]: {
      translateX: 200,
    },
  }),
};

export default function App() {
  return (
    <Scroll.Container scrollAxis="y" className="h-[100vh] scroller">
      <Scroll.Section className="h-[100vh] scroll-child">
        <Scroll.Item keyframes={keyframes.heading} className="">
          <div className=" flex justify-center relative items-center">
            <h1
              className={`${poppins.className} bg-red-400	 text-7xl w-[40vw] text-right absolute text-zinc-700 mb-[10rem] mr-8`}
            >
              Desenvolvedor e{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                UI/UX{" "}
              </span>{" "}
              design
            </h1>
          </div>
        </Scroll.Item>
      </Scroll.Section>
      <Scroll.Section className="h-[100vh] scroll-child flex justify-center items-center bg-purple-200">
        <Scroll.Item>
          <h1>Page Two</h1>
        </Scroll.Item>
      </Scroll.Section>
      <Scroll.Section className="h-[100vh] scroll-child flex justify-center items-center bg-lime-200">
        <Scroll.Item>
          <h1>Page Three</h1>
        </Scroll.Item>
      </Scroll.Section>
    </Scroll.Container>
  );
}
