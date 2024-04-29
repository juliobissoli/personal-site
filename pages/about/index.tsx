import { NextPage } from "next";
import { format, differenceInMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import Head from "next/head";



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


    const description = `
    E aí! Beleza? Eu sou o Julio Cesar Santos Bissoli, mas pode me chamar só de Julio, tranquilo? Tenho 26 anos e sou de Linhares, no interior do Espírito Santo, mas estou em Vitória-ES desde 2016.\n
    Desde que cheguei por aqui, entrei de cabeça no mundo da programação. E foi amor à primeira linha de código! 😄 Me transformei num desenvolvedor de software que apaixonado em criar sistemas que são simples e fáceis de usar. Aprendi muito nesses mais de 5 anos de estrada no mundo de desenvolvimento de aplicações web, e quero evoluir cada vez mais.\n
    Estou sempre disposto a encarar novos desafios e projetos! Se precisar de um parceiro pra somar no seu time ou projeto, estoua disposição! Estou aqui pra ajudar a transformar suas ideias em realidade, do jeito que você precisa.\n
    Vamos trocar uma ideia e ver como podemos fazer acontecer?`

    // moment.locale('pt-br')

    const getTotalWorkingLabel = (init: string, end: string) => {
        const totalMonth = differenceInMonths(new Date(end), new Date(init))

        if (totalMonth > 11) {
            return `${(totalMonth / 12).toFixed(0)} anos e ${(totalMonth % 12).toFixed(0)} meses`
        }

        return `${totalMonth} meses`
    }

    return (
        <>
            <Head>
                <title> Julio Bissoli</title>
                <meta property="og:description" content="Olá, sou Juio Bissoli, desenvolvedor de software e UI/UX design"></meta>
                <meta property="og:title" content="Julio Bissoli" key="title" />
                <link rel="icon" href="/logo.svg" />
                <meta property="og:image" content="https://raw.githubusercontent.com/juliobissoli/personal-site/main/public/avatar.jpg" />

                <meta property="twitter:image" content="https://raw.githubusercontent.com/juliobissoli/personal-site/main/public/avatar.jpg" ></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:title" content="Julio Bissoli"></meta>
                <meta name="twitter:description" content="Olá, sou Juio Bissoli, desenvolvedor de software e UI/UX design"></meta>
                
            </Head>
            <main className="md:mx-[5vw]  relative  border-primary border-0 md:border-1 flex-1  min-h-[100vh]">
                <header className="mt-4 md:mt-8  border-b-primary flex items-end">
                    <h1 className="p-4 md:p-8  md:mx-16 text-4xl md:text-5xl ">
                        Saiba mais sobre mim
                    </h1>
                </header>


                <div className="flex flex-col-reverse md:flex-row">

                    <aside className="p-4 md:p-8 md:mx-16 w-full lg:w-3/5 max-w-[835px] text-secondary tracking-wide">
                        <div className="mt-8 text-2xl md:text-3xl space-y-4 text-justify font-light ">
                            {
                                description.split('\n').map((el, i) => (
                                    <div key={i}>
                                        <p>{el}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="text-zinc-500 mt-8">
                            <h3 className="uppercase border-b-primary py-1 text-xs mt-16 mb-2">Carreira</h3>
                            <ul className="space-y-8">
                                {
                                    companiesInfo.map(
                                        (company, i) => (
                                            <li className="" key={i}>
                                                <p className="text-2xl uppercase tracking-wide font-light text-secondary"><strong>{company.role}</strong></p>
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
                            <h3 className="uppercase border-b-primary py-1 text-xs mt-16 mb-2">Formação</h3>
                            <ul className="space-y-8">
                                {
                                    academicInfo.map(
                                        (academy, i) => (
                                            <li className="" key={i}>
                                                <p className="text-2xl uppercase tracking-wide font-light text-secondary"><strong>{academy.curse}</strong></p>
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
                    </aside>

                    <aside className="p-2 md:p-16 w-full lg:w-2/5">
                        <div className="w-full max-w-[400px] rounded-2xl border-primary overflow-auto">
                            <img src="/avatar.jpg" />
                        </div>
                    </aside>
                </div>
            </main >

        </>
    )
}


export default AboutPage;