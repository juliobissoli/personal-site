import { NextPage } from "next";
import { format, differenceInMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale'



const ProjectsPage: NextPage = () => {



    const getTotalWorkingLabel  = (init: string, end: string) =>  {
        const totalMonth = differenceInMonths(new Date(end), new Date(init))

        if (totalMonth > 11) {
            return `${ (totalMonth / 12).toFixed(0) } anos e ${ (totalMonth % 12).toFixed(0)} messes`
        }

        return `${ totalMonth } messes`
    }

    return (
        <main className="md:mx-[5vw]  relative md:border flex-1  min-h-[100vh]">
            <header className="mt-4 md:mt-8  border-b flex items-end">
                <h1 className="p-4 md:p-8  md:mx-16 text-4xl md:text-5xl text-zinc-900 ">
                    Projetos
                </h1>
            </header>

        
        </main >

    )
}


export default ProjectsPage;