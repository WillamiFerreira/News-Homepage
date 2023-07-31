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
            <MenuToggle onClick={toggleMenu} open={show}>
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
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