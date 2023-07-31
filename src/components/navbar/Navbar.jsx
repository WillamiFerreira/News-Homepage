import { useState } from 'react';

import {
    NavbarStyled,
    MenuToggle
} from "./NavbarStyled"

export default function Navbar(){
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!show);
    }

    return(
        <NavbarStyled open={show}>
            <MenuToggle onClick={toggleMenu}>
                <div className="stick01"></div>
                <div className="stick02"></div>
                <div className="stick03"></div>
            </MenuToggle>
            <nav>
                <ul> 
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Treading</li>
                    <li>Categories</li>
                </ul>
            </nav>

        </NavbarStyled>
    )
}