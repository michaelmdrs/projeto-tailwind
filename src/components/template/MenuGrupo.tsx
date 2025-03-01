import { ReactNode } from "react"

export interface MenuGrupo {
    label: string
    children?: React.ReactNode
    className?: string
}

export default function MenuGrupo(props: MenuGrupo) {
    return (
        <div className={`flex flex-col gap-2 ${props.className ?? ''}`}>
            <span className="text-white font-semibold">{props.label}</span>
            <div>{props.children}</div>
        </div>
    )
}