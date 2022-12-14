import { createGlobalStyle } from "styled-components";
import bgImg from "./assets/images/bgImg.jpg";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inconsolata', monospace;
    }
    body{
        background-image: url(${bgImg});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-color: #000;
        color: #fff;
        height: 100vh;
        width: 100vw;
        overflow: hidden;

    }
    h1{
        font-family: 'Lobster', cursive;
        letter-spacing: 3px;
    }
    p{
        font-family: 'Inconsolata', monospace;
    }
    `;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;
