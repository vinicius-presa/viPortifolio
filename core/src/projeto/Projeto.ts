import Tecnologia from "../tecnologia/Tecnologia"
import { Nivel } from "./Nivel"
import { Tipo } from "./Tipo"

export default interface Projeto {
    tecnologias: Tecnologia[]
    id: number
    nome: string
    descricao: string
    imagens: string[]
    tipo: Tipo
    nivel: Nivel
    repositorio: string
    destaque: boolean
    tecnologia: Tecnologia[]
}