import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  :root{
    --color-brand-1: #052758;
    --color-brand-2: #314B73;
    --color-brand-3: #000000;
    --color-brand-4: #404040;
    --color-brand-5: #DADADB;
    --shadow:0px 3px 6px; 
  }
  body{
    margin: 0;
    background-color:#ffffff;
  }
  a {
    text-decoration: none;
  }
  img{
    width: 100%;
  }

  h1,h2,h3,h4,h5,h6,span,label{
    font-family: Segoe UI;
  }

  p, li{
    
    font-family: Tahoma;
  }
  li{
    list-style:none;
  }
`;

export default GlobalStyle;
