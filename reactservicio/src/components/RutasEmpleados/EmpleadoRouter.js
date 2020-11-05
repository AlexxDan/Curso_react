import React, { Component } from "react";
import Global from "./../../Global";
import axios from "axios";

export default class EmpleadoRouter extends Component {
  state = {
    empleado: [],
    status: false,
  };

  cargarEmpleado = () => {
    var request = "/api/Empleados";
    var url = Global.empleado + request;
    axios.get(url).then((res) => {
      this.setState({
        empleado: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarEmpleado();
  };

  render() {
    return (
      <div>
        <h1>Rutas de empleados</h1>
        <ul>
          {this.state.status == true &&
            this.state.empleado.map((emp, index) => {
              return (
                <li key={index}>
                  {emp.apellido}
                  <a href={"/empleadosDetalle/" + emp.idEmpleado}>Detalles</a>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
