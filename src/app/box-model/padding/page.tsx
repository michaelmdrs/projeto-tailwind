import Pagina from "@/components/template/Pagina";
import Titulo from "@/components/template/Titulo";

export default function Page() {
    return (
        <Pagina className="flex flex-col gap-7">
                <Titulo titulo="Utilizando Padding" subtitulo="Espaçamento interno" />
            <div>
                <div className="bg-blue-200 p-7 inline-block">Content</div>
                <div className="bg-blue-300 px-7 inline-block">Content</div>
                <div className="bg-blue-400 pt-7 inline-block">Content</div>
                <div className="bg-blue-500 pb-7 inline-block">Content</div>
                <div className="bg-blue-600 py-7 inline-block">Content</div>
                <div className="bg-blue-700 p-7 inline-block">Content</div>
                <div className="bg-blue-800 p-7 inline-block">Content</div>
            </div>

        </Pagina>
    )
}