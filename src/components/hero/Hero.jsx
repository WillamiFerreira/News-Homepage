import largeHero from '../../assets/images/image-web-3-desktop.jpg'
import tinyHero from '../../assets/images/image-web-3-mobile.jpg'

import {
    HeroStyled,
    HeroImageStyled
}from './HeroStyled'

function Hero({id}){
    return(
        <HeroStyled id={id}>
            <source media="(min-width: 768px)" srcSet={largeHero} />
            <HeroImageStyled src={tinyHero}/>
        </HeroStyled>
    )
}

export default Hero;