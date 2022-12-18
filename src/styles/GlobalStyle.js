import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  body {
    font-family: 'Inter', sans-serif;
    /* font-family: 'Nanum Myeongjo', serif; */
    /* font-family: 'Gothic A1', sans-serif; */
    font-weight: 400;
    line-height: 1.5;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  input, button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
