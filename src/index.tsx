import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Ultra";   /*Can be any text*/
    src: local("Ultra-Regular"), url("./fonts/Ultra-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "YesevaOne";   /*Can be any text*/
    src: local("YesevaOne-Regular"), url("./fonts/YesevaOne-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Fahkwang";   /*Can be any text*/
    src: local("Fahkwang-Light"), url("./fonts/Fahkwang-Light.ttf") format("truetype");
  }

  body {
    font-family: 'Fahkwang';
    color: #2F2F2F;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
