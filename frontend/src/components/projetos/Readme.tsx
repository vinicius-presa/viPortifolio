import ConteudoMD from "../shared/ConteudoMD"

export interface ReadmeProps {
    markdown: string
}

export default function Readme(props: ReadmeProps) {
    return(
        <div className="w-10/10 md:w-11/12 xl:w-full">
            <div className="flex flex-col items-stretch p-6 bg-black border border-zinc-800 rounded-2xl">
                <div className="prose prose-zinc prose-invert" style={{ maxWidth: "70%"}}>
                    <ConteudoMD markdown={props.markdown} />
                </div>
            </div>
        </div>
    )
}