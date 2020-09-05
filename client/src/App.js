import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Nav from './components/nav/Nav';

const GlobalStyle = createGlobalStyle`
  html {
    width:100vw;
    height:100vh;
  }
  body {
    background: #E0E6FF;
    width:100vw;
    height:100vh;
  }
  * {
    margin: 0;
    padding:0;
  }
  a {
    text-decoration:none;
    color:#000;
  }
  ul {
    list-style:none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Nav />
      </div>
    </>
  );
}

export default App;
