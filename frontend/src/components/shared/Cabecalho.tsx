import Image from "next/image";
import Container from "./container";
import Link from "next/link";
import Menu from "./Menu";

export default function Cabecalho(){
    return (
        <header className="w-full flex items-center h-16 bg-black/75">
            <Container className="flex-1 flex justify-center sm:justify-between items-center">
                <div className="flex items-center gap-10">
                    <Link href="/" className="hidden sm:block">
                        <Image src="/V.png" alt="Logo" width={80} height={0} />
                    </Link>
                    <Menu />
                </div>
                <div className="hidden sm:flex itens-center">
                    <Link href="https://www.linkedin.com/in/vinicius-kerber-presa-5839b323b/"
                        target="_blank"
                        className="bg-red-500 rounded-full px-7 py-1 text-sm font-bold"
                    >
                        Perfil
                    </Link>
                </div>
            </Container>
        </header>
    )
}