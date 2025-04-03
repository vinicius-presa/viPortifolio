import Curriculo from "@/components/curriculo";
import Principal from "@/components/landing/Principal";
import Projetos from "@/components/projetos/Projetos";
import Container from "@/components/shared/container";
import { obterProjetos } from "@/function/projetos";
import { obterTecnologias } from "@/function/tecnologias";
import Tecnologias from "@/components/Tecnologias/Tecnologias";
import Link from "next/link";
import Image from "next/image";

export const fetchCache = 'force-no-store'


export default async function Home() {
  const tecnologias = await obterTecnologias()
  const projetos = await obterProjetos()

  return (
    
    <div>

    <Principal/>
      <Container className="py-16 flex flex-col items-center gap-10">
         
        <Tecnologias lista={tecnologias.destaques} />
        <h1 className="flex gap-3 items-center">
          <span className="text-3xl sm:text-3xl font-bold text-center">
            Projetos
          </span>
        </h1>
        
        <Projetos titulo="Destaques" lista={projetos.destaques} />
        <Projetos titulo="Todos os Projetos" lista={projetos.todos} />
        <Curriculo tecnologias={tecnologias.destaques} />  
       
      </Container>
      <footer className="w-full flex items-center gap-3 sm:gap-40 justify-center h-16 ">
          <Link
						href="https://github.com/vinicius-presa"
						target="_blank"
					>
					<Image src="/gt.png" alt="Logo" width={50} height={0} />
					</Link>
          <Link
						href="https://www.linkedin.com/in/vinicius-kerber-presa-5839b323b/"
						target="_blank"
					>
					<Image src="/link.png" alt="Logo" width={50} height={0} />
					</Link>
          <Link
						href="https://api.whatsapp.com/send/?phone=5551994883525&text&type=phone_number&app_absent=0"
						target="_blank"
					>
					<Image src="/wt.png" alt="Logo" width={50} height={0} />
					</Link>
      </footer>
    </div>   
    
  
  )
}