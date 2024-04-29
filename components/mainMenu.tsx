import { List, Moon, Sun, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function MainMenu() {

  const [isExpanded, toggleExpanded] = useState(false);

  const [isDarkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkMode && !isDarkMode) {
      handleChangeTheme()
    }
  }, [])

  const router = useRouter();

  const routersAvailable = [
    {
      route: "/projects",
      label: "Projetos"
    },
    {
      route: "/about",
      label: "Sobre"
    },
    // {
    //   route: "/about",
    //   label: "Contato"
    // }
  ]

  const handleChangeTheme = () => {
    // const nextTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'light' : 'dark'
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    setDarkMode(!isDarkMode)
  }

  return (
    <>
      <div className="hidden md:block">
        <nav className="fixed py-8 md:py-16 h-[100%] w-[5vw] hover:w-[10vw] hover:border-r dark:border-zinc-800 backdrop-blur	bg-white/30 dark:bg-black/30 flex flex-col justify-between z-30 items-center rotate-content">
          <Link href={`/`} className="flex items-center gap-1">
            <i className="icon icon-logo h-[4.5vh] w-[4.5vh] bg-zinc-950 dark:bg-zinc-50"></i>
          </Link>

          <ul className="flex flex-col items-center gap-8 text-zinc-700 dark:text-zinc-300  ">
            {
              routersAvailable.map((route, i) => (
                <li key={i} className={`m-4 rotate-content-item border-b-primary border-1   hover:border-zinc-500 ${route.route === router.pathname ? 'border-border-zinc-100' : 'border-transparent'}`}>
                  <Link href={route.route}>
                    <button className={` whitespace-nowrap text-sm  uppercase tracking-wider `}>
                      {route.label}
                    </button>
                  </Link>
                </li>
              ))
            }
          </ul>

          <button onClick={handleChangeTheme} className="text-xl text-zinc-950 dark:text-zinc-50 h-10 w-10 p-2 hover:bg-zinc-300 rounded-full">
            {!isDarkMode ? (<Moon size={20} weight="fill" />) : (<Sun size={20} weight="fill" />)}

          </button>
        </nav>
      </div>

      <div className="md:hidden block">



        {
          !isExpanded
            ? (
              <nav className="fixed w-[100vw] top-0 p-4 backdrop-blur	bg-white/30  dark:bg-black/30 flex justify-between z-30 items-center">
                <Link href={`/`}>
                  <i className="icon icon-logo h-10 w-10 bg-zinc-950 dark:bg-zinc-50"></i>
                </Link>
                <button onClick={() => toggleExpanded(true)}>
                  <List size={32} />
                </button>
              </nav>
            )
            : (
              <div className="fixed w-[100vw] h-[100vh] top-0 backdrop-blur	bg-white/70 dark:bg-black/70  z-30">
                <div className=" p-4 flex-col h-full w-full flex justify-between ">

                  <div className="flex justify-between  items-center">
                    <Link href={`/`}>
                      <i className="icon icon-logo h-10 w-10 bg-zinc-950 dark:bg-zinc-50"></i>
                    </Link>
                    <button onClick={() => toggleExpanded(false)}>
                      <X size={32} />
                    </button>
                  </div>

                  <ul className="flex flex-col items-center gap-8 text-secondary">
                    {
                      routersAvailable.map((route, i) => (
                        <li key={i} className={`m-4 border-b border-1  ${route.route === router.pathname ? 'border-border-zinc-100' : 'border-transparent'}`}>
                          <Link href={route.route}>
                            <button onClick={() => toggleExpanded(false)} className={` whitespace-nowrap text-sm  uppercase tracking-widest text-lg`}>
                              {route.label}
                            </button>
                          </Link>
                        </li>
                      ))
                    }
                  </ul>


                  <footer className="text-center p-16">
                    <button onClick={
                      () => handleChangeTheme()
                    } className="text-xl text-zinc-950 dark:text-zinc-50 h-10 w-10 p-2 hover:bg-zinc-300 rounded-full border-primary">
                      {!isDarkMode ? (<Moon size={20} weight="fill" />) : (<Sun size={20} weight="fill" />)}

                    </button>
                  </footer>
                </div>
              </div>
            )
        }
      </div>
    </>
  );
}
