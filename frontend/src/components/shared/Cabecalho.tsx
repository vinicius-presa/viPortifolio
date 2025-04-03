import Image from "next/image";
import Container from "./container";
import Link from "next/link";
import Menu from "./Menu";

export default function Cabecalho(){
    return (
        <header className="w-full flex items-center h-16 bg-black/50">
			<Container className="flex-1 flex justify-center sm:justify-between items-center">
			
				<div className="flex items-center gap-10">
					<Link href="/" className="hidden sm:block">
						<Image src="/logo.png" alt="Logo" width={60} height={0} />
					</Link>
					
				</div>
				<Menu />
				<div className="hidden sm:flex items-center">
					
                    <Link
						href="https://www.linkedin.com/in/vinicius-kerber-presa-5839b323b/"
						target="_blank"
						
					>
						<Image src="/linkedin.png" alt="Logo" width={50} height={0} />
					</Link>
				</div>
			</Container>
		</header>
        
        
        
        
    )
}