import { styled } from "styled-components"

export const NewsStyled = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    grid-area: news;
    row-gap: 42px;
    padding: 30px 22px;
    background-color: #00001A;
    height: 100%;

    ${({theme}) => theme.tablet`
        padding: 16px;
    `}

    h1{
        color: #E9AB53;
        font-size: 32px;
        //border: 1px solid red;

        ${({theme}) => theme.desktop`
            font-size:40px;
        `}


    }

    & > div#newsContainer{
        display: flex;
        flex-direction: column;
        //border: 1px solid yellow;
        justify-content: space-between;
        flex-grow: 1;
       

    }

    div.hrCont > hr{
        margin: 34px 0;
    }

    
`
export const NewContentStyle = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 18px;

    h2, p {
        color: white;
    }

    h2{
        font-size: 20px;
        font-weight: 800;

    }

    p{
        line-height: 20px; /* 100% */
        font-size: 15px;
    }

`