import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;700&display=swap');
html{
  overflow-x: hidden !important;
}
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

  .socials{
    display:flex;
  }

  .image-presentation-only-mobile{
    display:none;
  }

  .instagram-container{
    display:flex; 
    align-items:center;
    text-decoration:none;
    color:#fff;
  }
  .instagram-container > span{
    margin-left:.6rem;
  }

  .whatsapp-container{
    display:flex; 
    align-items:center;
    text-decoration:none;
    color:#fff;
  }
  .whatsapp-container > span{
    margin-left:.6rem;
  }

  @media (max-width: 1016px){
    .navbar{
      margin-left: 2rem !important;
      margin-top: 2rem !important;
      border:none !important;
      margin-bottom: -.5rem !important;
    }
    .nav-device-lg{
      display:none !important;
    }
    .title-presentation{
      font-size:36px !important;
      width: 20rem !important;
    }
    .div-text-presentation{
      width: 100% !important;
      margin: 2rem !important;
    }

    #clientes{
      margin-top:.5rem !important;
    }

    .title-jobs{
      font-size:36px !important;
      margin-left: 2rem !important;
      text-align:left;
      margin-top: -2rem !important;
      margin-bottom: 0.6rem !important;
    }
    #nossos-servicos{
      margin: 0rem !important;
    }

    .card-jobs{
      margin: 1.5rem auto !important;
      padding: 2rem 1rem 5rem 1rem !important;
    }

   

    .cards-jobs-all{
      display: block !important;
    }

    #footer{
      display: block !important;
      padding: 3rem 2rem !important;
    }

    .contact-whatsapp{
      border:none !important;
      padding: 0 !important;
      margin-left: 0 !important;
      color:rgb(157, 114, 177) !important;
      font-weight: 600 !important;
    }

    .div-button-contact-whatsapp{
      margin-left:2rem;
    }

    .social-and-copyright{
      display:block !important;
      text-align:center !important;
    }

    .copyright{
      margin-top:2rem;
      font-size:.86em;
    }

    .socials{
      display:flex !important;
      justify-content:space-between !important;
    }

    .socials > a > img{
      width: 2rem;  
    }

    .image-presentation-only-mobile{
      display:block !important;
      margin-left: -1.7rem;
    }

    .image-presentation-only-mobile > img{
      width: 23rem !important;
      margin-bottom: 1rem !important;

    }

    .text-presentation{
      margin-top: 2rem !important;
    }

    .line-divider-footer{
      display:none;
    }

    .logo-and-contact{
      display:none !important;
    }

    .created-by{
      text-align:right;
    }

  }
  `;

export default GlobalStyle;
