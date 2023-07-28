import { styled } from "styled-components"



export const MainNewStyled = styled.div`
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    padding: 8px;
    grid-area: uniquenew;

    ${({theme}) => theme.desktop`
        flex-direction: row;
    `}
    
    & > span{
        border: 1px solid blue;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;

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