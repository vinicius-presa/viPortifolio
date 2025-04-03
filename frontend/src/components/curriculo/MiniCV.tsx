import Image from "next/image"

export default function MiniCV() {
    return (
        <div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
            <div className="relative min-w-72 h-64 xl:self-end">
                <Image src="/perfil.png" alt="Foto de perfil" fill />
            </div>
            <div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
                <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
                    <span className="
                        text-white text-2xl font-bold
                    ">Vinicius Kerber Presa</span>
                </div>
                <p className="text-sm text-center md:text-left lg:text-center xl:text-left">
                    Sou um profissional altamente dedicado e comprometido com minhas rotinas e obrigações.
                    Descobri minha verdadeira paixão na área de Desenvolvimento.
                    Graduado em Análise e Desenvolvimento de Sistemas, e em constantes atualizações. 
                </p>
            </div>
        </div>
    )
}