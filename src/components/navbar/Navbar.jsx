import { useState } from 'react';
import logo from '../../assets/images/logo.svg'

import {
    NavbarStyled,
    MenuToggle,
    BackgroundNavStyled
} from "./NavbarStyled"

export default function Navbar(){
    // const show = useStore((state) => state.show);
    // const setShow = useStore((state) => state.setShow);
    //console.log(show);


    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!show);
    }
    
    document.body.style.overflow = show ? "hidden" : "initial";

    return(
        <>
        <BackgroundNavStyled open={show}>
            <div id="loginho" > <img src={logo} alt="" /> </div>
        </BackgroundNavStyled>
        
        <NavbarStyled open={show}>
            <img id='logo' src={logo} alt="logo" />

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
        </>
    )
}