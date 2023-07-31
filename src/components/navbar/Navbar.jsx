import {
    NavbarStyled,
    MenuToggle
} from "./NavbarStyled"

export default function Navbar(){
    return(
        <NavbarStyled>
            <MenuToggle>
                <div className="stick01"></div>
                <div className="stick02"></div>
                <div className="stick03"></div>
            </MenuToggle>
        </NavbarStyled>
    )
}