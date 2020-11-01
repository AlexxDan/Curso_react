import React, { Component } from "react";

export default class Numero extends Component {
  enviarNumero = () => {
    this.props.sumar(this.props.numero);
  };

  render() {
    return (
      <li>
        {this.props.numero}
        <button onClick={this.enviarNumero}>Sumar {this.props.numero}</button>
      </li>
    );
  }
}
