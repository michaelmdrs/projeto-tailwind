export interface TituloProps {
    titulo: string
    subtitulo: string
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl">{props.titulo}</h1>
            {props.subtitulo && <p className="text-sm text-zinc-400 p-1 mb-9">{props.subtitulo}</p>}
        </div>
    )
}