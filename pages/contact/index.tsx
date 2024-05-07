import SpinnerAnimation from "@/components/common/SpinnerAnimation";
import { EnvelopeSimple, GithubLogo, LinkedinLogo, X } from "@phosphor-icons/react";
import { NextPage } from "next"
import { useState } from "react"

enum AppState {
    SUCCESS = 'success',
    LOADING = 'loading',
    ERROR = 'error',
    EMPTY = 'empty'
}

const ContactsPage: NextPage = () => {

    const initFormData = {
        email: '',
        name: '',
        phone: '',
        message: '',
        isValid: false
    };


    const [formData, setFormData] = useState(initFormData)
    const [requestStatus, setRequestStatus] = useState(AppState.EMPTY)

    const handleSetForm = (data: string, entity: 'email' | 'name' | 'message' | 'phone') => {
        let copy = { ...formData }


        if (entity === 'phone') {
            data = data.replace(/[^\d()-]/g, '');
            const x = data.match(/(\d{2})(\d{5})(\d*)/);



            if (x) {
                const res = `(${x[1]}) ${x[2]}-${x[3]}`
                data = res;
            }
        }
        copy[entity] = data

        const regexEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


        const valid = copy.name.length > 2 && copy.message.length > 3 && regexEmail.test(copy.email)

        copy.isValid = valid

        setFormData(copy)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log('Sending')
        setRequestStatus(AppState.LOADING)
        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(
            (res) => {
                console.log('Response received')
                if (res.status === 200) {
                    console.log('Response succeeded!')
                    setFormData(initFormData)
                    setRequestStatus(AppState.SUCCESS)
                }

            },
            (error) => {
                console.error(error)
                setRequestStatus(AppState.ERROR)

            }

        )
    }

    return (
        <main className="md:mx-[5vw]  border-primary   min-h-[100vh]">
            <header className="pt-8 border-b-primary flex items-end">
                <h1 className="p-4 md:p-8  md:mx-16 text-4xl md:text-5xl ">
                    Fale comigo
                </h1>
            </header>

            <section className="flex mt-8  p-4 md:p-8 md:mx-16  gap-16 flex-col md:flex-row">
                <aside className="w-full md:w-[620px]">
                    <p className="text-xl text-justify	mb-8 text-zinc-500">
                        Vamos trabalhar juntos! Entre em contato e vamos conversar sobre como podemos realizar o seu projeto.
                    </p>
                    {
                        (requestStatus === AppState.ERROR || requestStatus === AppState.SUCCESS) &&
                        <div className={`my-8 p-4 rounded-xl border-primary flex justify-between ${requestStatus === AppState.SUCCESS ? 'bg-green-100/10' : 'bg-red-100/10'}`}>
                            <p className="text-center">
                                {
                                    requestStatus === AppState.SUCCESS
                                        ? 'Promto o email foi enviado🎉🎉! Muito em breve irei te responder'
                                        : 'Ops! alguma coisa deu errado. Tente mandar o email diretamente pelo link abaixo'
                                }

                            </p>
                            <div className=" text-right">
                                <button className="" onClick={() => setRequestStatus(AppState.EMPTY)} ><X /></button>
                            </div>
                        </div>
                    }
                    <form className="space-y-4">
                        <div>
                            <p className="font-light text-sm text-zinc-500">Seu nome</p>
                            <input
                                value={formData.name}
                                onChange={
                                    (data) => {
                                        handleSetForm(data.target.value, 'name')
                                    }
                                } type="text" className="input-primary w-full" />
                        </div>

                        <div className="">
                            <p className="font-light text-sm text-zinc-500">Seu email</p>
                            <input
                                value={formData.email}
                                onChange={
                                    (data) => {
                                        handleSetForm(data.target.value, 'email')
                                    }
                                }
                                type="email" className="input-primary w-full" />
                        </div>

                        <div className="">
                            <p className="font-light text-sm text-zinc-500">Seu número de telefone</p>
                            <input
                                value={formData.phone}
                                onChange={
                                    (data) => {
                                        handleSetForm(data.target.value, 'phone')
                                    }
                                }
                                type="text"
                                className="input-primary w-full" />
                        </div>

                        <div className="">
                            <p className="font-light text-sm text-zinc-500">Fale um pouco do que tem em mente</p>
                            <textarea
                                value={formData.message}
                                onChange={
                                    (data) => {
                                        handleSetForm(data.target.value, 'message')
                                    }
                                }
                                rows={4} className="input-primary w-full resize-none	" />
                        </div>

                        <div className="text-end">

                            <button onClick={handleSubmit} disabled={!formData.isValid || requestStatus === AppState.LOADING} className="btn-primary ">
                                {
                                    requestStatus === AppState.LOADING ? <SpinnerAnimation /> : 'Enviar'
                                }
                            </button>
                        </div>
                    </form>



                    <div className="w-full space-y-4 mt-16  ">
                        <h3 className="uppercase border-b-primary py-1 text-xs  mb-2">minhas redes</h3>

                        <div className="flex w-full flex-wrap gap-4">
                            <a
                                className="w-full md:w-auto btn-secondary flex gap-4 items-center justify-center"
                                href="https://www.linkedin.com/in/julio-bissoli/"
                                target="_blank"
                            >
                                <LinkedinLogo size={24} weight="fill" /> LinkedIn
                            </a>


                            <a
                                className="w-full md:w-auto btn-secondary flex gap-4 items-center justify-center"
                                href="https://github.com/juliobissoli"
                                target="_blank"
                            >
                                <GithubLogo size={24} weight="fill" /> GitHub
                            </a>

                            <a
                                className="w-full md:w-auto btn-secondary flex gap-4 items-center justify-center"
                                href="mailto:juliobissoli33@gmail.com"
                                target="_blank"
                            >
                                <EnvelopeSimple size={24} /> Email
                            </a>
                        </div>

                    </div>
                </aside>
            </section>

        </main >
    )
}


export default ContactsPage