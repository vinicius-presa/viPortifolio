import { Projeto } from "@core"
import ItemProjeto from "./ItemProjeto"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

export interface ProjetosProps {
    titulo: string
    lista: Projeto[]
}

export default function Projetos(props: ProjetosProps) {
    return (
        <div className="flex flex-col items-center sm:items-start w-7/10 md:w-11/12 xl:w-full gap-5">
            <h3 className="text-2xl text-center font-bold text-amber-200">{props.titulo}</h3>
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="flex">
                    {props.lista.map((projeto) => (
                        <CarouselItem 
                            key={projeto.id} 
                            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/3"
                        >
                            <ItemProjeto projeto={projeto} />
                        </CarouselItem>
                    )) }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}