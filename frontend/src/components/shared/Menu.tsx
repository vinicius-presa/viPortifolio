"use client" 
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Menu(){
    const caminho = usePathname()

    return (
        <nav className="flex gap-15">
            <MenuItem href="/" selecionado={caminho === "/"}>
            <div className="">    
                Home
            </div>    
            </MenuItem>
            <MenuItem href="/projeto/2" selecionado={caminho.startsWith("/projeto")}>
                Projetos
            </MenuItem>
            <MenuItem 
                href="https://api.whatsapp.com/send/?phone=5551994883525&text&type=phone_number&app_absent=0"
                selecionado={false}
                novaAba={true}    
            >
                Contato
            </MenuItem>
            
            
        </nav>
    )
}

function MenuItem(props: {
    href: string
    children: React.ReactNode
    selecionado:boolean
    novaAba?: boolean
}){
    return (
        <Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
            <span
                className={`
                    flex items-center font-bold gap-2 text-sm border-b-amber-400 hover:text-gray-500
                    ${props.selecionado ? 
                    "font-bold border-b-3 gap-2 text-white" 
                    : "font-bold gap-2 text-zinc-300 "
                    }    
                `}
            >
                {props.children}
            </span>
            
            
        </Link>
    )
}