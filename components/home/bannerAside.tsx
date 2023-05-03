import { Manrope } from "next/font/google";

const subtitle = Manrope({ weight: "400", subsets: ["latin"] });

interface Props {
  title: string;
  year: string;
  imagePath: string
}
// codtime-splash-img.png

const BannerAside: React.FC<Props> = ({ title, year, imagePath}) => {
  return (
    <div className="relative h-[100vh] w-full ">
      <img src={imagePath} className="h-full w-full" />
      <div className="absolute text-white top-0  w-full h-full opacity-70 bg-gradient-to-t from-transparent to-zinc-900 from-60%">
        <div
          className={`${subtitle.className} w-ful flex justify-start flex-col p-8`}
        >
          <h1 className="text-2xl">{ title }</h1>
          <span className="text-sm">({ year })</span>
        </div>
      </div>
    </div>
  );
};

export default BannerAside;
