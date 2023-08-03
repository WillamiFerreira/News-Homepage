import { styled } from "styled-components"

export const MainNewStyled = styled.div`
    //border: 1px solid green;
    display: flex;
    flex-direction: column;
    padding: 8px;
    grid-area: uniquenew;
    height: 100%;
    justify-content: center;

    ${({theme}) => theme.tablet`
        padding: 0 8px;

    `}

    ${({theme}) => theme.desktop`
        flex-direction: row;
    `}


    h1{
        font-size: 42px;

        ${({theme}) => theme.desktop`
        font-size: 56px;
    `}

    }



    
    & > span{
        //border: 1px solid blue;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        line-height: 27px; /* 180% */
        color: #5D5F79;

        ${({theme}) => theme.desktop`
            max-width: 50%;
        `}

        & > button{
            align-self: center;
            border: none;
            color: white;
            font-weight: 700;
            background-color : #F15E50;
            margin-top: 22px;
            cursor: pointer;

            &:hover{
            background-color: hsl(240, 100%, 5%);
    }

        }
    }


    ${({theme}) => theme.tablet`
        & > span > button {
            align-self: flex-start;
            margin-top: 0px;
        }
    }
    `}



`