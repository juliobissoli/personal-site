import { NextSeo } from "next-seo"

interface Props {
    title: string;
    description: string;
    imageUrl: string;
}


const SeoDefault = ({}) => {
    return (
        <>
            <NextSeo
                title="Julio Bissoli"
                description="Olá, sou Juio Bissoli, desenvolvedor de software e UI/UX design"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://julioboissoli.vercel.app',
                    title: 'Julio Bissoli',
                    description: 'Olá, sou Juio Bissoli, desenvolvedor de software e UI/UX design',
                    images: [
                        {
                            url: 'https://raw.githubusercontent.com/juliobissoli/personal-site/main/public/img-share.png',
                            width: 1200,
                            height: 630,
                            alt: 'Julio Bissoli',
                            type: 'image/png',
                        },
                    ],
                    siteName: 'JulioBissoli',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
        </>
    )
}

export default SeoDefault;