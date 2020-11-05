import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";

export default class detalleDepartamento extends Component {
  constructor(props) {
    super(props);
    this.setState({
      idDept: props.iddepartamento,
    });
  }
  state = {
    departamento: {},
    status: false,
    idDept: 0,
  };

  buscarDepartamento = () => {
    var request = "/api/Departamentos/" + this.props.iddepartamento;
    var url = Global.urlCRUDdept + request;
    axios.get(url).then((res) => {
      this.setState({
        departamento: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.buscarDepartamento();
  };

  render() {
    return (
      <div>
        {this.state.status == true && (
          <React.Fragment>
            <a href="/">Volver al listado</a>
            <h1>Nombre : {this.state.departamento.nombre}</h1>
            <h3>Número : {this.state.departamento.numero}</h3>
            <h3>Localidad : {this.state.departamento.localidad}</h3>
            <a
              href={
                "/update/" +
                this.state.departamento.numero +
                "/" +
                this.state.departamento.nombre +
                "/" +
                this.state.departamento.localidad
              }
              className="btn btn-info"
            >
              Modificar
            </a>
          </React.Fragment>
        )}
      </div>
    );
  }
}
