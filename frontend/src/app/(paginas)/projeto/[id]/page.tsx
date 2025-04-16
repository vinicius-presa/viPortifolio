import CarrosselImagens from "@/components/shared/CarrosselImagens"
import Cabecalho from "@/components/shared/Cabecalho"
import Container from "@/components/shared/container"
import { obterProjeto } from "@/function/projetos"
import Tecnologias from "@/components/Tecnologias/Tecnologias"
import { obterReadme } from "@/function/github"
import Readme from "@/components/projetos/Readme"

export default async function PaginaProjeto(props:{ params: Promise<{ id: string }>}){
    const { id } = await props.params
    const projeto = await obterProjeto(id)

    if (!projeto) return null
    const readme = await obterReadme(projeto.repositorio)

    return (
        <div>
            <Cabecalho />
        
                <Container className="py-7 flex flex-col items-center gap-10">
                    <h1 className="text-3xl sm:text-5xl font-bold">{projeto.nome}</h1>
                    <CarrosselImagens imagens={projeto.imagens.slice(1)} />
                    <Tecnologias lista={projeto.tecnologias} tamanhoMenor />
                    
                        <Readme markdown={readme} />
                    
                </Container>
            </div>  
        
        
    ) 
}