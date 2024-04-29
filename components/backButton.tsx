import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowLeft } from '@phosphor-icons/react';

function BackButton() {
    const router = useRouter();

    // Função para lidar com o clique no botão de voltar
    const handleBack = () => {
        // Verifica se há uma rota anterior
        if (router?.back) {
            // Se houver uma rota anterior, volta para ela
            router.back();
        } else {
            // Caso contrário, redireciona para a rota padrão "/"
            router.push('/');
        }
    };

    return (
        <button onClick={handleBack} className='font-light text-secondary flex items-center gap-2'>
            <ArrowLeft className="text-2xl" size={18} weight="regular" /> voltar
        </button>
    );
}

export default BackButton;
