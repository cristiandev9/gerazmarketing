import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;700&display=swap');
body {
    margin: 0;
    padding: 0;
    background: #151515;
    font-family: Lato, sans-serif;
    overflow-x: hidden;
  }
  
  html {
    scroll-behavior: smooth;
  }

  .scroll{
    animation: animate 10s linear infinite;
    animation-delay: -20s;
  }

  @keyframes animate {
    0% { 
      transform: translateX(190%); 
    } 
    100% { 
      transform: translateX(-230%); 
    }
  }

  `;

export default GlobalStyle;
