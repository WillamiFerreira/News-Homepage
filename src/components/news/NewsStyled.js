import { styled } from "styled-components"

export const NewsStyled = styled.div`
    //border: 1px solid red;
    padding: 10px;
    grid-area: news;
    max-width: 344px;
    padding: 22px;
    background-color: #00001A;

    h1{
        color: #E9AB53;
        margin-bottom: 42px;
        font-size: 32px;


    }

    & > div#newsContainer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 372px;

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
    }

    hr{
        margin-top: 8px;
        margin-bottom: 4px;
    }

`