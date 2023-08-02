import {styled} from 'styled-components';

export const ArticlesStyled = styled.div`
    border: 3px solid #9B2915;
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
    border: 1px solid blue;
    display: flex;
    column-gap: 22px;


    ${({theme}) => theme.tablet`
        flex-direction: column;
    `}


    ${({theme}) => theme.desktop`
        display: flex;
        flex-direction: row;
    `}



`
export const ArticleThumbContentStyled = styled.div`
    border: 3px solid green;
    


    /* ${({theme}) => theme.tablet`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    `} */


`
export const ArticleThumbStyled = styled.img`
    border: 1px solid purple;
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100;

    ${({theme}) => theme.tablet`
            height: 141px;
            object-fit: cover;
    `}
    
`
export const ArticleContentStyled  = styled.div`
    display: flex;
    padding: 6px 0;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid orange;
    width: 100%;

    h1{
        color: #C5C6CE;
        font-family: Inter;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 27px; /* 90% */
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