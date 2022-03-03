import React from 'react';                       //Interfaz web.
import ReactDOM from 'react-dom';                //Lenguaje web.
import './index.css';                            //Importando el css del index. Está en la misma carpeta del index. Estilos de css.
import App from './App';                         //Tiene extensión js. Se está importando una App de la carpeta.
import reportWebVitals from './reportWebVitals'; //Sirve para simular datos de manera local. Si se va el internet, react se encarga de guardar datos de manera local en la memoria de la compu.
                                                 //Hace que la app funcione aún si no hay internet.

//Gracias a la app web, se renderiza la página web.
ReactDOM.render(//Ayuda a pintar la interfaz en la pantalla. La renderiza.
  <React.StrictMode>
    <App />    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
