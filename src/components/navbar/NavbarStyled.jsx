import { styled } from "styled-components";

export const NavbarStyled = styled.div`
    display: flex;
    position: relative;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: ${props => props.open ? "left" : "space-between"};
    width: 100%;
    height: ${props => props.open ? "100vh" : "60px" };
    border: 1px solid black;
    padding: 0 16px;
    background-color: white;
    z-index: 10;

    nav{
        display: ${(props) => props.open ? 'flex' : 'none'};

        ${({theme}) => theme.tablet`
            display: flex;
        `}

        ul {
            display: flex;
            flex-direction: ${props => props.open ? "column" : "row"};
            text-align: left;
            position: relative;
            justify-content: flex-end;
            list-style: none;
            gap: 20px;
        }
    }


    
`;
export const MenuToggle = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    width: 40px;
    height: 40px;
    //border: 1px solid black;
    

    border: 0;
    background-color: transparent;

    & > div{ 
        height: 4px;
        width: 100%;
        background-color: black;
        transition-duration: .4s;

    }

    & > div.one{ 
        transform: ${props => props.open ? "rotate(45deg) translate(7px, 7px)" : "none" };
    }

    & > div.two{ 
        opacity: ${props => props.open ? "0": "1"};


    }

    & > div.three{ 
        transform: ${props => props.open ? "rotate(-45deg) translate(5px, -4px)": "none"};

    }

    ${({theme}) => theme.tablet`
        display: none;
    `}
`;