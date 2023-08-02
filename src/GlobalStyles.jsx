import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Inter', sans-serif;
        
        p {
            font-weight: 400;
        }

        h1{
            font-weight: 900;
        }

        h2{
            font-weight: 700;
        }

        width: 100vw;
        display: flex;
        justify-content: center;
    }
`

export default GlobalStyle;