import React, { Component } from "react";

export default class empleado extends Component {
  render() {
    return (
      <div>
        <li>
          <label>{this.props.emp.apellido}</label>&nbsp;&nbsp;
          <button
            onClick={() => {
              this.props.detalleEmpleado(this.props.emp.idEmpleado);
            }}
          >
            Detalles
          </button>
        </li>
      </div>
    );
  }
}
