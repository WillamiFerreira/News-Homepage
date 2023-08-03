import {styled} from 'styled-components';

export const ArticlesStyled = styled.div`
    //border: 3px solid #9B2915;
    display: grid;
    //grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-columns: repeat(1, minmax(auto, 1fr));
    gap: 40px;

    ${({theme}) => theme.tablet`
        grid-template-columns: repeat(2, minmax(auto, 1fr));

    `}

    ${({theme}) => theme.desktop`
        grid-template-columns: repeat(3, minmax(auto, 1fr));

    `}

`
export const ArticleStyled = styled.article`
    //border: 1px solid blue;
    display: flex;
    column-gap: 22px;
    max-width: 360px;


    ${({theme}) => theme.tablet`
        flex-direction: column;
    `}


    ${({theme}) => theme.desktop`
        flex-direction: row;
    `}



`
export const ArticleThumbContentStyled = styled.div`
    //border: 3px solid green;



    /* ${({theme}) => theme.tablet`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    `} */


`
export const ArticleThumbStyled = styled.img`
    //border: 1px solid purple;
    display: block;
    object-fit: cover;
    object-position: center;
    width: 100px;
    height: 100%;

    ${({theme}) => theme.tablet`
        height: 140px;
        width: 100%;
        margin-bottom: 12px;
    `}

    ${({theme}) => theme.desktop`
        width: 100px;
        height: 100%;
        margin-bottom: 0;
    `}




`
export const ArticleContentStyled  = styled.div`
    display: flex;
    padding: 6px 0;
    flex-direction: column;
    justify-content: space-between;
    //border: 2px solid orange;
    width: 100%;

    h1{
        color: #C5C6CE;
        font-family: Inter;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 27px; /* 90% */

        ${({theme}) => theme.tablet`
            font-size: 34px;
            margin-bottom: 8px;
        `}

        ${({theme}) => theme.desktop`
            font-size: 30px;
            margin-bottom: 0px;
        `}
    }

    h2{
        font-size: 18px;
        font-weight: 800;
        cursor: pointer;

        ${({theme}) => theme.tablet`
            font-size: 22px;
        `}

        ${({theme}) => theme.desktop`
            font-size: 18px;
        `}

        &:hover{
            color: hsl(5, 85%, 63%);
        }

    }

    p{
        color: #5D5F79;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 27px; /* 180% */


    }
`