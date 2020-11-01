import "./primeraClase.css";
import React, { Component } from "react";

//podemos declara metodos fuera de la clase con la sintaxis function
//Es lo mismo que no podemos utlizar variable de la clase
//PARA LLAMAR A LAS FUNCIONES EXTERNAS NO SE UTLIZA THIS
function miFunction() {
  console.log("Estoy en mi funcion");
}
class PrimeraClase extends Component {
  contador = 1;
  metodoAccion = () => {
    console.log("Contador " + this.contador);
    this.contador++;
  };

  //podemos combinar props que recibimos con state para visualizar los cambios
  //LAS VARIABLES DE ESTADOS DEBEMOS DECLARARLAS PARA PODER
  //UTILIZARLA
  // state= { variable: valor1, variable: valor2 }

  state = { valor: parseInt(this.props.inicio) };
  //PODEMOS MANEJAR VARABLES DE ESTADO PARA LOS DIBUJOS
  incrementarEstado = () => {
    //VAMOS A TENER UN CONTADOR PARA DIBUJAR SU INCREMENTO
    //EN LA PÁGINA CADA VEZ QUE ENTREMOS AQUÍ, INCREMNETADMOS  EL CONTADOR
    this.setState({
      valor: this.state.valor + 2,
    });
    console.log(this.setState.valor);
  };

  render() {
    //dentro del render podemos declara tambien funciones o variables,
    //pero debemos hacerlo con la sintaxis anteriro
    //si hay diferencia entre el render y fuera
    //si que hay deferencia entre el render y fera hay difencias
    var numero = 1;
    const hacerAlgo = () => {
      console.log("Haciendo algo ------" + numero);
      numero++;
    };

    return (
      <React.Fragment>
        <h1 className="rojo">Primera Clase</h1>
        <h2 className="rojo">{this.props.titulo}</h2>
        <h3 className="azul">Estado : {this.setState.valor}</h3>
        <button onClick={this.metodoAccion}>Incrementa contador</button>
        <button
          onClick={() => {
            miFunction();
            //si el metodo o la variable estan en render no lleva this
            hacerAlgo();
            this.incrementarEstado();
          }}
        >
          Pulsar
        </button>
      </React.Fragment>
    );
  }
}
export default PrimeraClase;
