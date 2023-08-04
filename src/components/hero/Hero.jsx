import largeHero from '../../assets/images/image-web-3-desktop.jpg'
import tinyHero from '../../assets/images/image-web-3-mobile.jpg'

import {
    HeroStyled,
    HeroImageStyled
}from './HeroStyled'

function Hero({id}){
    return(
        <HeroStyled id={id} role="img" >
            <source media="(min-width: 668px)" srcSet={largeHero} alt="desktop hero imagem" />
            <HeroImageStyled src={tinyHero} alt="mobile hero imagem"/>
        </HeroStyled>
    )
}

export default Hero;