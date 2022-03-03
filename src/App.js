import React, {Component} from 'react'; //Se importa react y un componente.
import logo from './logo.svg';          //Se importa un logo. Es el ícono que está girando.
import './App.css';                     //Se importa el css de la App.

class App extends Component { //Se creó un componente con la etiqueta de clase. Se pueden tener muchas clases.
  render() {
    return (//No quitar el div, porque si no, no renderiza correctamente la página. //Estilo de Bootstrap. Para crear un elemento de HTML, se le debe poner className.
      <div className="App">

          <h1 className="Titulo">Pedido existoso</h1>

      </div>
    );
  }
}
export default App;
