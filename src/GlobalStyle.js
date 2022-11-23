import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inconsolata', monospace;
    }
    body{
        background-image: linear-gradient(90deg, #08244F, #134CB5, #0B42AB);
    }
    `