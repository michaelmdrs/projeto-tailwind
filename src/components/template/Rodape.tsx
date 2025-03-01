export interface RodapeProps {
    className?: string
}

export default function Rodape(props: RodapeProps) {
    return (
        <footer className={`border-t border-zinc-900 text-zinc-500 text-sm ${props.className ?? ''}`}>

            <div className="flex justify-end items-center px-7 boxed">
            Todos os direitos reservados &copy; {new Date().getFullYear()} - By Michael Santos &spades;
            </div>
        </footer>
    )
}