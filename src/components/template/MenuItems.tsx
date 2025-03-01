import Link from "next/link"

export interface MenuItemsProps {
    label: string
    href: string
    className?: string
}

export default function MenuItems(props: MenuItemsProps) {
    return (
        <Link
            href={props.href} 
            className={`flex hover:underline ${props.className ?? ''}`}>
            <span className="text-white text-sm text-zinc-600 hover:text-zinc-400">{props.label}</span>
        </Link>
    )
}