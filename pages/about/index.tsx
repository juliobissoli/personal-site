import { NextPage } from "next";
import { format, differenceInMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import { Manrope } from "next/font/google";



const AboutPage: NextPage = () => {



    const companiesInfo = [
        {
            name: 'Motora',
            city: "Vitória-ES",
            role: 'Desenvolvedor Front-end',
            init: '2021-11-01',
            end: '2024-04-15'
        },
        {
            name: 'Motora',
            city: "Vitória-ES",
            role: 'Desenvolvedor Web (Estágio)',
            init: '2021-03-01',
            end: '2021-11-01'
        },
        {
            name: 'Linhagua Mineração',
            city: "Linhares-ES",
            role: 'Engenheiro de Software',
            init: '2020-07-01',
            end: '2021-03-01'
        },
        {
            name: 'Conceptho',
            city: "Vitória-ES",
            role: 'Desenvolvedor Web (Estágio)',
            init: '2019-12-01',
            end: '2020-03-01'
        }
    ]


    const academicInfo = [
        {
            curse: 'Graduação em Ciência de Computação',
            institute: 'UFES - Universidade Federal do Espírito Santo',
            city: "Vitória-ES",
            init: '2019-07-01',
            end: '2022-11-01'
        },
        {
            curse: 'Graduação em Engenharia de Computação (Incompleto)',
            institute: 'UFES - Universidade Federal do Espírito Santo',
            city: "Vitória-ES",
            init: '2016-03-01',
            end: '2019-06-01'
        },
        {
            curse: 'Técnico em Informática para Internet',
            institute: 'EEEM. Emir de Macedo Gomes',
            city: "Linhares-ES",
            init: '2012-02-01',
            end: '2015-12-01'
        }
    ]

    // moment.locale('pt-br')

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
                    Saiba mais sobre min
                </h1>
            </header>

            <section className="p-8 md:mx-16 max-w-[635px] text-zinc-700 tracking-wide">
                <div className="mt-8 text-2xl space-y-4 text-justify ">
                    <p className="">
                        Me chamo Julio, tenho {(new Date().getFullYear()) - 1998} anos
                    </p>
                    <p>
                        Sou um desenvolvedor de software apaixonado por criar sistemas com interfaces simples e intuitivas que
                        proporcionam uma excelente experiência ao usuário. Com <strong> mais de 5 anos </strong> de experiência no
                        desenvolvimento de aplicações web, sou especializado em front-end habilidades sólidas em UI/UX.
                    </p>


                </div>
                <div className="text-zinc-500 mt-8">
                    <h3 className="uppercase border-b py-1 text-xs mt-16 mb-2">Carreira</h3>
                    <ul className="space-y-8">
                        {
                            companiesInfo.map(
                                (company, i) => (
                                    <li className="" key={i}>
                                        <p className="text-xl uppercase"><strong>{company.role}</strong></p>
                                        <p>{company.name} • {company.city}</p>
                                        <p className="space-x-1">
                                            <span className="capitalize">
                                                {format(new Date(company.init), 'LLL yyyy', { locale: ptBR })} - {format(new Date(company.end), 'LLL yyyy', { locale: ptBR })}
                                            </span>
                                            <span>• {getTotalWorkingLabel(company.init, company.end)} </span>

                                        </p>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>

                <div className="text-zinc-500 mt-8">
                    <h3 className="uppercase border-b py-1 text-xs mt-16 mb-2">Fomação</h3>
                    <ul className="space-y-8">
                        {
                            academicInfo.map(
                                (academy, i) => (
                                    <li className="" key={i}>
                                        <p className="text-xl uppercase"><strong>{academy.curse}</strong></p>
                                        <p>{academy.institute} • {academy.city}</p>
                                        <p className="space-x-1">
                                            <span className="capitalize">
                                                {format(new Date(academy.init), 'LLL yyyy', { locale: ptBR })} - {format(new Date(academy.end), 'LLL yyyy', { locale: ptBR })}
                                            </span>

                                        </p>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </section>
        </main >

    )
}


export default AboutPage;