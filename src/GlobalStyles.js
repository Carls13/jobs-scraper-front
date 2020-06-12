import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
      box-sizing: border-box;
      font-family: 'Titillium Web', sans-serif;
      overflow-x: hidden;
  }

  *, *:before, *:after {
      box-sizing: inherit;
  }


  ul, li, h1, h2, h3, h4, h5, h6, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0; font-family: 'Titillium Web', sans-serif; }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    /* max-width: 500px; */
    overscroll-behavior: none;
    width: 100%; 
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`