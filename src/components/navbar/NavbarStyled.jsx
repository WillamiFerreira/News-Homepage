import { styled } from "styled-components";

export const NavbarStyled = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
    height: 60px;
    border: 1px solid black;
    
`;
export const MenuToggle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    width: 40px;
    height: 40px;

    & > div{ 
        height: 4px;
        width: 100%;
        background-color: black
        
    }
`;