import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  

  *, *::before, *::after {
    box-sizing: border-box;
}

  button {
    font: inherit;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
}
  body {
    font-family: 'Ubuntu' sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #121212;
    color: #fff;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li { 
    list-style: none;
  }

  figure{
    margin: 0;
  }
  
  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  img, ion-icon, a, button, time, span, figure { 
    display: block
  }

  main {
    margin: 15px 12px;
    margin-bottom: 75px;
    min-width: 259px;

    @media (width > 1250px) {
        display: flex; 
        justify-content: center;
        align-items: start; 
        gap: 25px; 
      }

      @media (width < 1250px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
        
      }

      @media (min-width: 580px) {
        margin-top: 60px;
        margin-bottom: 100px;

      }
      @media (width < 580px) {
        margin-top: 10px;
        margin-bottom: 50px;

      }
  }

`;

export default GlobalStyles;
