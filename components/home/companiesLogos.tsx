export const CompaniesLogos = () => {
  const logos = [
    "aguia_branca_logo.png",
    "embraer_logo.png",
    "motora_logo.png",
    "mum_logo.png",
    "linhagua_logo.png",
    "amaes_logo.png",
  ];

  return (
    <div className="h-full w-full  p-0 md:p-[0.8vw] overflow-y-hidden scroll-inherit-display ">
      <div className="flex flex-col gap-2 slide-track">
        {logos.map((el, i) => (
          <div
            key={i}
            className=" flex flex-col items-center justify-center w-full h-[300px] "
          >
            {/* {  i > 0 ?   ( <span className="p-16 text-zinc-300">•</span>) : ''} */}
            <img src={`/${el}`} className="object-contain" />
          </div>
        ))}
        {logos.map((el, i) => (
          <div
            key={i}
            className=" flex flex-col items-center justify-center w-full h-[300px] "
          >
            {/* {  i > 0 ?   ( <span className="p-16 text-zinc-300">•</span>) : ''} */}
            <img src={`/${el}`} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};
