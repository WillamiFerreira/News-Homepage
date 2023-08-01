import { ImageContainer, BannerContainer } from "./components/ImageContainer/ImageContainer"
import { ArticleItem } from "./components/ArticleItem/ArticleItem"
//import {Navbar} from "./components/navbar/Navbar"

import { Wrapper, ComponentWrapper } from "./components/wrapper/Wrapper";

//import articles from "./assets/articles"
//import news from "./assets/news.json"

//import logo from "../src/assets/images/logo.svg"
//import hamburgerButton from "../src/assets/images/icon-menu.svg"
//import bannerMobile from "../src/assets/images/image-web-3-mobile.jpg"
import Articles from "./components/article/Articles"
import Hero from "./components/hero/Hero"
import MainNew from "./components/mainNew/MainNew"
import News from "./components/news/News"
import Navbar from "./components/navbar/Navbar";


function App() {

  return (

    <Wrapper border='1px solid red' $global > {/*Wrapper global */}

      {/* <Navbar>
        <ImageContainer imgURL={logo} width='48px' />
        <ImageContainer imgURL={hamburgerButton} width='42px' />
      </Navbar> */}

      <Navbar />

      <Wrapper direction="column" border='3px solid blue' >{/* Wrapper Central */}

        <ComponentWrapper direction='column' border="3px solid black" $main gap="16px" >
          <Hero/>
            <MainNew />
            <News />
        </ComponentWrapper>

        <Articles/>

      </Wrapper>

    </Wrapper>
  )
}

export default App
