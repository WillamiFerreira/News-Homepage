import { styled } from "styled-components";

export const NavbarStyled = styled.div`
    display: flex;
    position: ${props => props.open ? "absolute" : "static"};;
    right: 0;
    align-items: center;
    justify-content: ${props => props.open ? "left" : "space-between"};
    width: 100%;
    height: ${props => props.open ? "100vh" : "88px" };
    background-color: white;
    

    #logo{
        display: ${props => props.open ? "none" : "block"};
        width: 48px;

        ${({theme}) => theme.desktop`

            width: 64px;
        
        `}
    }

    nav{
        display: ${(props) => props.open ? 'flex' : 'none'};
        font-size: 15px;

        ${({theme}) => theme.tablet`
            width: 380px;
            display: flex;
            
        `}

        ${({theme}) => theme.desktop`
            width: 445px;
        `}



        ul {
            display: flex;
            flex-direction: ${props => props.open ? "column" : "row"};
            text-align: left;
            width: 100%;
            position: relative;
            justify-content: space-between;
            height: ${props => props.open ? "200px" : "fit-content"};
            list-style: none;
            margin-left: ${props => props.open ? "16px" : "0px"};


            li {
                color: ${props => props.open ? "#000" : "#5D5F79"};    
                cursor: pointer;     
                
                &:hover{
                    color: hsl(5, 85%, 63%)
                }
            }

        }
    }

    ${({theme}) => theme.tablet`
        height: ${props => props.open ? "100vh" : "120px" };

    `}

    ${({theme}) => theme.desktop`
        height: ${props => props.open ? "100vh" : "164px" };
        padding-top: 20px;



    `}



    
`;

export const BackgroundNavStyled = styled(NavbarStyled)`
    display: ${props => props.open ? "relative" : "none"};
    width: 100%;
    height: 88px;
    flex-direction: row;
    div#loginho{
        display: block;
        position: relative;
        left: 20px;
        width: 48px;
        //background-color: purple;

        & > img {
            display: block;
            width: 100%;
        }


    }

`
export const MenuToggle = styled.button`
    position: ${props => props.open ? "absolute" : "relative"};
    top: ${props => props.open ? "34px" : ""};
    right: ${props => props.open ? "20px" : ""};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    width: 40px;
    border: 0;
    background-color: transparent;



    & > div{ 
        height: 3px;
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
        transform: ${props => props.open ? "rotate(-45deg) translate(3px, -3px)": "none"};

    }

    ${({theme}) => theme.tablet`
        display: none;
    `}
`;