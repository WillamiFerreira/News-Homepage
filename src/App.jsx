import { ImageContainer, BannerContainer } from "./components/ImageContainer/ImageContainer"
import { ArticleItem } from "./components/ArticleItem/ArticleItem"
import {Navbar} from "./components/navbar/Navbar"
import { Wrapper } from "./components/wrapper/Wrapper"

//import articles from "./assets/articles"
import news from "./assets/news.json"

import logo from "../src/assets/images/logo.svg"
import hamburgerButton from "../src/assets/images/icon-menu.svg"
//import bannerMobile from "../src/assets/images/image-web-3-mobile.jpg"
import Articles from "./components/article/Articles"
import Hero from "./components/hero/Hero"
import MainNew from "./components/mainNew/MainNew"

function App() {

  return (
    <Wrapper border='1px solid red' > {/*Wrapper global */}
      <Navbar>
        <ImageContainer imgURL={logo} width='48px' />
        <ImageContainer imgURL={hamburgerButton} width='42px' />
      </Navbar>

      <Wrapper gap='32px' border='1px solid blue' >{/* Wrapper Central */}
        <Hero />

        {/* 
        <Wrapper border='1px solid green'> {/*main info container
          <article>
            <h1>The Bright Future of Web 3.0 ?</h1>
            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          </article>
          <Buttom>
            read more
          </Buttom>
        </Wrapper>
        */}
        <MainNew />


        <Wrapper border='1px solid orange'> {/*News Constainer */}
          <h2>New</h2>    
          {news.news.map(uniqueNew => (
            <article key={uniqueNew.id}>
              <h3>{uniqueNew.title}</h3>
              <p>{uniqueNew.description}</p>
            </article>
          ))}
        </Wrapper>

        <Articles/>
      </Wrapper>

    </Wrapper>
  )
}

export default App
