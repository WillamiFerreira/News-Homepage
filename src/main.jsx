import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './GlobalStyles.jsx'
import { ThemeProvider } from 'styled-components'
import { media } from './assets/styles/media.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={{...media}}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
