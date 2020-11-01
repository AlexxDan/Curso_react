import React, { Component } from "react";
import Numero from "./numero";

export default class numeros extends Component {
  contador = 0;
  state = {
    numeroArray: [45, 65, 36, 21, 25, 4],
    suma: 0,
  };

  sumarValor = (numeroEnviado) => {
    this.contador += parseInt(numeroEnviado);
    this.setState({
      suma: this.contador,
    });
  };

  geneararNumero = () => {
    var numeroGenerado = Math.round(1 + Math.random() * (100 - 1));
    var numerosAll = this.state.numeroArray;
    numerosAll.push(numeroGenerado);
    this.setState({
      numeroArray: numerosAll,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Numeros</h1>
        <h3 style={{ color: "indigo" }}> Sumar {this.state.suma}</h3>
        <ul>
          {this.state.numeroArray.map((num, index) => {
            return <Numero key={index} numero={num} sumar={this.sumarValor} />;
          })}
        </ul>
        <button onClick={this.geneararNumero}>Generar NUmero</button>
      </React.Fragment>
    );
  }
}
