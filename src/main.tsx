import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalStyle }  from './styles/global';
import App from './App';


// Find the root element in your HTML file
// The `!` asserts that this will not be null
const container = document.getElementById('root')!;


// Create a root and render the App
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);