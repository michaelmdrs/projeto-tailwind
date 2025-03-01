import Logo from "./Logo"
import MenuUsuario from "./MenuUsuario"

export interface CabecalhoProps {
    children?: string
}

export default function Cabecalho(props: CabecalhoProps) {
    return (
        <header className={`flex items-center p-7 border-b border-zinc-800 justify-between ${props.className ?? ''}`}>
            <div className="flex justify-between items-center boxed">
                <Logo />
                <MenuUsuario />
            </div>
        </header>
    )
}