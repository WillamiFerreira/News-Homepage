import {styled} from 'styled-components';

export const ArticlesStyled = styled.div`
    border: 1px solid #9B2915;
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
    min-width: 100px;


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

    ${({theme}) => theme.tablet`
            height: 141px;
            object-fit: cover;
    `}
    
`
export const ArticleContentStyled  = styled.div`
    border: 2px solid orange;
    width: 100%;
`