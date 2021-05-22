// import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
	* {
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Open Sans Condensed', sans-serif;
  
  }
body{
  padding: 20px 60px;

}

  input {
    border-style: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  button {
    border-style: none;
    cursor: pointer;
  }
`;
export default GlobalStyle;