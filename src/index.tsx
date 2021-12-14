import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EjemploReloj from './Ejemplo/EjemploReloj';
import reportWebVitals from './reportWebVitals';
import EjemploCSS from './Ejemplo/EjemploCss';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <EjemploReloj/>
    <EjemploCSS/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
