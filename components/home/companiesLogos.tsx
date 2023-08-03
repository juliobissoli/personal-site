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
    <div className="h-full w-full  p-4 overflow-y-hidden scroll-inherit-display ">
      <div className="flex flex-col gap-2">
        {logos.map((el) => (
          <div key={el} className=" flex items-center justify-center w-full h-[300px] ">
            <img src={`/${el}`} className="object-contain  h-[300px] w-[300px]" />
          </div>
        ))}
      </div>
    </div>
  );
};
