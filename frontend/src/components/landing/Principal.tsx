
import Cabecalho from "../shared/Cabecalho";



export default function Principal(){
    return(
        <div className="
                flex flex-col items-center justify-center h-[300px]
                bg-[url('/principal.jpg')] bg-cover bg-center    
            "
        >
            <Cabecalho />
            
            <div className="text-white flex-1 w-full flex flex-col justify-center items-center gap-5">
                
            
                <div className="flex flex-col items-center gap-1">
                    <h1 className="flex gap-3 items-center">
                        
                        <span className="text-3xl sm:text-5xl font-bold text-center">
                            Olá sou 
                            Vinicius Kerber Presa
                        </span>
                        
                    </h1>    
                    <h2 className="text-zinc-200 text-center">Desenvolvedor de Sistemas</h2>
                </div>
                
            </div>
        
        
        </div>
    )
}