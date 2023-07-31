import { styled } from "styled-components";

export const NavbarStyled = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
    height: 60px;
    border: 1px solid black;
    padding: 0 16px;

    nav{
        display: none; //${(props) => props.open ? 'flex' : 'none'};

        ${({theme}) => theme.tablet`
            display: flex;
        `}

        ul {
            display: flex;
            flex-direction: row;//modificar depois
            text-align: center;
            position: relative;
            justify-content: flex-end;
            list-style: none;
            gap: 20px;
        }
    }


    
`;
export const MenuToggle = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    width: 40px;
    height: 40px;

    border: 0;
    background-color: transparent;

    & > div{ 
        height: 4px;
        width: 100%;
        background-color: black
        
    }

    ${({theme}) => theme.tablet`
        display: none;
    `}
`;