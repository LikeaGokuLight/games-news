

import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
    }

    &::-webkit-scrollbar-track {
      background: white;
    }
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }

  h2 {
    font-size: 3rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
  }

  h3 {
    font-size: 1.3rem;
    color: #333;
    padding: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 200%;
    color: dimgrey;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  a {
    text-decoration: none;
  }

  #root, #__next {
    isolation: isolate;
  }
  
`

export default GlobalStyles;