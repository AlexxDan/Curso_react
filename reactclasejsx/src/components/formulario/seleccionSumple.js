import React, { Component } from "react";

export default class seleccionSumple extends Component {
  seleccionado = React.createRef();
  state = {
    filas: [],
    opciones: [],
  };

  generarOption = () => {
    var option = [];
    for (var i = 0; i < 10; i++) {
      var aleat = Math.round(Math.random() * 55 + 1);
      option.push(
        <option key={i} value={aleat}>
          {aleat}
        </option>
      );
    }
    this.setState({ opciones: option });
    //return option;
  };

  //METODO PARA CARGAR LOS OPTIONS SOLAMNENTE UNA VEZ CICILO DE VIDA
  componentWillUnmount = () => {
    this.generarOption();
  };

  tablaMultiplicar = (e) => {
    e.preventDefault();
    var numero = parseInt(this.seleccionado.current.value);
    var datos = [];
    for (var i = 0; i < 10; i++) {
      var operation = numero * i;
      datos.push(
        <tr key={i}>
          <td>
            {numero}*{i}
          </td>
          <td>{operation}</td>
        </tr>
      );
    }
    this.setState({
      filas: datos,
    });
  };

  render() {
    return (
      <div>
        <h1>Seleccion de elementos</h1>
        <form onSubmit={this.tablaMultiplicar}>
          <select ref={this.seleccionado} name="seleccionado">
            {this.state.opciones}
          </select>
          <button>GenerarTabla</button>
        </form>

        <table>
          <thead>
            <th>Operacion</th>
            <th>Resultado</th>
          </thead>
          <tbody>{this.state.filas}</tbody>
        </table>
      </div>
    );
  }
}
