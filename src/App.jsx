import { Wrapper, ComponentWrapper } from "./components/wrapper/Wrapper";
import Articles from "./components/article/Articles"
import Hero from "./components/hero/Hero"
import MainNew from "./components/mainNew/MainNew"
import News from "./components/news/News"
import Navbar from "./components/navbar/Navbar";

function App() {

  return (
    <Wrapper $global > {/*Wrapper global */}
      <Navbar />
      <Wrapper direction="column" >{/* Wrapper Central */}
        <ComponentWrapper $main direction='column' gap="32px" place_items="center" >
          <Hero/>
          <MainNew />
          <News />
        </ComponentWrapper>
        <Articles/>
      </Wrapper>
      <p id="waterMark" ><i>Made with &#128153; and &#9749; by <a target="_blanck" href="https://github.com/WillamiFerreira">Gabriel Ferreira</a></i></p>
    </Wrapper>
  )
}

export default App
