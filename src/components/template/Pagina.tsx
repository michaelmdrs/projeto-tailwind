import { ReactNode } from "react"
import Cabecalho from "./Cabecalho"
import Rodape from "./Rodape"
import Menu from "./Menu"

interface PaginaProps {
  children?: React.ReactNode
  className?: string
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <Cabecalho className="h-20 w-screen" />
      <div className="flex flex-1 boxed">
        <Menu className="hidden lg:block lgw-72 md:w-48 sm:w-40 py-7"/>
        <main className={`
              flex-1 py-7
              ${props.className ?? ''}
          `}
          >{props.children}</main>
      </div>
      <Rodape className="h-14"/>
    </div>
  )
}
