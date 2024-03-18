import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #16171d;
        color: #f0f1f4;
    }
`

function App({ Component, pageProps}) {
    return(
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default App