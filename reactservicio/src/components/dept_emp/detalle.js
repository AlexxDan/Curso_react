import React, { Component } from "react";

export default class detalle extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.detalle[0].idEmpleado}</td>
        <td>{this.props.detalle[0].apellido}</td>
        <td>{this.props.detalle[0].oficio}</td>
        <td>{this.props.detalle[0].salario}</td>
        <td>{this.props.detalle[0].departamento}</td>
      </tr>
    );
  }
}
