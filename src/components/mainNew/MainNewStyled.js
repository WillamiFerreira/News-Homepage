import { styled } from "styled-components"

export const MainNewStyled = styled.div`
    border: 2px solid green;
    & > span{
        border: 2px solid blue;
        display: flex;
        flex-direction: column;

        & > button{
            align-self: center;
        }
    }

    ${({theme}) => theme.tablet`
        & > span > button {
            align-self: flex-start;
        }
    }
    `}



`