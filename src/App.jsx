import { ImageContainer, BannerContainer } from "./components/ImageContainer/ImageContainer"
import {Navbar} from "./components/navbar/Navbar"
import { Wrapper } from "./components/wrapper/Wrapper"
import { Buttom } from "./components/Buttom/Buttom"

function App() {

  return (
    <Wrapper padding='0px 16px'>
      <Navbar>
        <ImageContainer imgURL='../src/assets/images/logo.svg' width='48px' />
        <ImageContainer imgURL='../src/assets/images/icon-menu.svg' width='42px' />
      </Navbar>
      <Wrapper gap='32px 0' padding='32px 0'>
      <BannerContainer imgURL='../src/assets/images/image-web-3-mobile.jpg' />
      <Wrapper>
        <article>
          <h1>The Bright Future of Web 3.0 ?</h1>
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
        </article>
        <Buttom>
          read more
        </Buttom>

      </Wrapper>


      </Wrapper>

    </Wrapper>
  )
}

export default App
