import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
  <>
    <GlobalStyle/>
    <App />
  </>
);