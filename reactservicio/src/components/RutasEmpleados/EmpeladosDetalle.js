import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";

export default class EmpeladosDetalle extends Component {
  //vamos a recibir poro con un constructor
  constructor(props) {
    super(props);
    console.log("Props detalle " + this.props.idempleado);
  }
  state = {
    empleado: [],
    status: false,
  };

  mostrarEmpleado = () => {
    var request = "/api/Empleados/" + this.props.idempleado;
    var url = Global.empleado + request;
    axios.get(url).then((res) => {
      this.setState({
        empleado: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.mostrarEmpleado();
  };

  render() {
    return (
      <div>
        <h1>Empleado EmpeladosDetalle</h1>
        {this.state.status == true && (
          <div>
            <h3 style={{ color: "orangered" }}>
              Apellido: {this.state.empleado.apellido}
            </h3>
            <h3 style={{ color: "violet" }}>
              Oficio: {this.state.empleado.oficio}
            </h3>
          </div>
        )}
      </div>
    );
  }
}
