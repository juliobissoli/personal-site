import { NextPage } from "next";
import { useRouter } from "next/router";

const ProjectDetail: NextPage = (props) => {
  const router = useRouter();

  return (
    <section>
      <div className="relative h-[100vh] w-full ">
        <img src={ Array.isArray(router?.query?.id) ? router?.query?.id[0] : router?.query?.id} className="h-full w-full" />
        <div className="absolute text-white top-0  w-full h-full opacity-70 bg-gradient-to-t from-transparent to-zinc-900 from-60%">
          <div
            className={`w-ful flex justify-start flex-col p-8`}
          >
            <h1 className="text-2xl">{router.query.id}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
