import Pagina from "@/components/template/Pagina";
import Titulo from "@/components/template/Titulo";

export default function PageMargin() {
    return (
        <Pagina className="flex flex-col gap-7">
                <Titulo titulo="Utilizando Margin" subtitulo="Espaçamento Externo" />
            <div>
                <div className="bg-green-200 m-7 inline-block">Content</div>
                <div className="bg-green-300 mx-9 inline-block">Content</div>
                <div className="bg-green-400 mt-8 inline-block">Content</div>
                <div className="bg-green-500 mb-12 inline-block">Content</div>
                <div className="bg-green-600 my-13 inline-block">Content</div>
            </div>

        </Pagina>
    )
}