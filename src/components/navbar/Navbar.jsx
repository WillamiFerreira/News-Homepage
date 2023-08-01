import { useState } from 'react';
import useStore from '../../assets/states';

import {
    NavbarStyled,
    MenuToggle
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