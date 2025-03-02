import MenuGrupo from "./MenuGrupo"
import MenuItems from "./MenuItems"

export interface MenuProps {
    children?: string
}

export default function Menu(props: MenuProps) {
    return (
        <aside className={`${props.className ?? ''}`}>
            <nav className="flex flex-col gap-6">
                <MenuGrupo label="Box Model">
                    <MenuItems label="Padding" href="/box-model/padding"></MenuItems>
                    <MenuItems label="Margin" href="/box-model/margin"></MenuItems>
                    <MenuItems label="Border" href="/pagina/border"></MenuItems>
                    <MenuItems label="Box Sizing" href="/pagina/box-sizing"></MenuItems>
                </MenuGrupo>
                <MenuGrupo label="Display">
                    <MenuItems label="Display" href="/pagina/display"></MenuItems>
                    <MenuItems label="Visibility" href="/pagina/visibility"></MenuItems>
                    <MenuItems label="Overflow" href="/pagina/overflow"></MenuItems>
                    <MenuItems label="Float" href="/pagina/float"></MenuItems>
                </MenuGrupo>
                <MenuGrupo label="FlexBox">
                    <MenuItems label="Flex Container" href="/pagina/flex-container"></MenuItems>
                    <MenuItems label="Flex Item" href="/pagina/flex-item"></MenuItems>
                    <MenuItems label="Flex Direction" href="/pagina/flex-direction"></MenuItems>
                    <MenuItems label="Flex Wrap" href="/pagina/flex-wrap"></MenuItems>
                    <MenuItems label="Justify Content" href="/pagina/justify-content"></MenuItems>
                    <MenuItems label="Align Items" href="/pagina/align-items"></MenuItems>
                    <MenuItems label="Align Content" href="/pagina/align-content"></MenuItems>
                </MenuGrupo>
                <MenuGrupo label="Grid">
                    <MenuItems label="Grid Container" href="/pagina/grid-container"></MenuItems>
                    <MenuItems label="Grid Item" href="/pagina/grid-item"></MenuItems>
                    <MenuItems label="Grid Template Columns" href="/pagina/grid-template-columns"></MenuItems>
                    <MenuItems label="Grid Template Rows" href="/pagina/grid-template-rows"></MenuItems>
                    <MenuItems label="Grid Column" href="/pagina/grid-column"></MenuItems>
                    <MenuItems label="Grid Row" href="/pagina/grid-row"></MenuItems>
                </MenuGrupo>
                <MenuGrupo label="Responsividade">
                    <MenuItems label="Media Query" href="/pagina/media-query"></MenuItems>
                    <MenuItems label="Mobile First" href="/pagina/mobile-first"></MenuItems>
                    <MenuItems label="Breakpoints" href="/pagina/breakpoints"></MenuItems>
                </MenuGrupo>
            </nav>
        </aside>
    )
}