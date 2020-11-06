import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/">Volver al listado</NavLink>
            <h1>Nombre : {this.state.departamento.nombre}</h1>
            <h3>Número : {this.state.departamento.numero}</h3>
            <h3>Localidad : {this.state.departamento.localidad}</h3>
            <NavLink
              to={
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
            </NavLink>
            <NavLink
              to={"/delete/" + this.state.departamento.numero}
              className="btn btn-success"
            >
              Eliminar Departamento NavLink
            </NavLink>
          </React.Fragment>
        )}
      </div>
    );
  }
}
