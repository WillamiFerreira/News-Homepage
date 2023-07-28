import { styled } from "styled-components"

export const HeroStyled = styled.picture`
    height: 300px;
    grid-area: hero;

    ${({theme}) => theme.desktop`
        display: flex;
        flex-direction: row;
    `}

`
export const HeroImageStyled = styled.img`
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
    
`