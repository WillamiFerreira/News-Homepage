import { ImageContainer, BannerContainer } from "./components/ImageContainer/ImageContainer"
import {Navbar} from "./components/navbar/Navbar"
import { Wrapper } from "./components/wrapper/Wrapper"
import { Buttom } from "./components/Buttom/Buttom"


import logo from "../src/assets/images/logo.svg"
import hamburgerButton from "../src/assets/images/icon-menu.svg"
import bannerMobile from "../src/assets/images/image-web-3-mobile.jpg"
import retroPc from "../src/assets/images/image-retro-pcs.jpg"
import { ArticleItem } from "./components/ArticleItem/ArticleItem"

function App() {

  return (
    <Wrapper padding='0px 16px'> {/*Wrapper global */}
      <Navbar>
        <ImageContainer imgURL={logo} width='48px' />
        <ImageContainer imgURL={hamburgerButton} width='42px' />
      </Navbar>

      <Wrapper gap='32px' padding='32px 0'>{/* Wrapper Central */}
        <BannerContainer imgURL={bannerMobile} />

        <Wrapper> {/*main info container*/}
          <article>
            <h1>The Bright Future of Web 3.0 ?</h1>
            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          </article>
          <Buttom>
            read more
          </Buttom>
        </Wrapper>

        <Wrapper> {/*News Constainer */}
          <h2>New</h2>
          <article>
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will Hydrogen-fueled cars ever catch up to EVs ?</p>
          </article>
          <article>
            <h3>The Downsides of AI Artistry</h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </article>
          <article>
            <h3>Is VC Funding Drying Up?</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </article>

        </Wrapper>

        <Wrapper dis>  {/*articles Container */}
          <ArticleItem>
            <ImageContainer imgURL={retroPc} />
          <article>
            <h3>Revinving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </article>
          </ArticleItem>
          <ArticleItem>
            <ImageContainer imgURL={retroPc} />
          <article>
            <h3>Revinving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </article>
          </ArticleItem>
          <ArticleItem>
            <ImageContainer imgURL={retroPc} />
          <article>
            <h3>Revinving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </article>
          </ArticleItem>
        </Wrapper>


      </Wrapper>

    </Wrapper>
  )
}

export default App
