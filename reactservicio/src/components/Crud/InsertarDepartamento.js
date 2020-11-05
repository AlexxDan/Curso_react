import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { Redirect } from "react-router-dom";

export default class InsertarDepartamento extends Component {
  codDept = React.createRef();
  nameDept = React.createRef();
  localDept = React.createRef();

  state = {
    mensaje: "",
    status: false,
  };

  nuevoDepartamento = (e) => {
    e.preventDefault();
    var numero = parseInt(this.codDept.current.value);
    var name = this.nameDept.current.value;
    var local = this.localDept.current.value;

    var dept = {
      numero: numero,
      nombre: name,
      localidad: local,
    };

    var request = "/api/Departamentos";
    var url = Global.urlCRUDdept + request;

    axios.post(url, dept).then((res) => {
      this.setState({
        mensaje: " Nuevo departamneto " + numero,
        status: true,
      });
    });
  };

  render() {
    if (this.state.status == true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Nuevo departamento : </h1>
        <form onSubmit={this.nuevoDepartamento}>
          <label>Numero dept : </label>
          <input
            type="text"
            name="codDept"
            ref={this.codDept}
            className="form-control"
          />
          <br />
          <label>Nombre dept : </label>
          <input
            type="text"
            name="nameDept"
            ref={this.nameDept}
            className="form-control"
          />
          <br />
          <label>Localidad Dept : </label>
          <input
            type="text"
            name="localDept"
            ref={this.localDept}
            className="form-control"
          />
          <br />
          <button className="btn-success">Insertar Numero</button>
        </form>
        {this.state.status == true && (
          <h3 style={{ color: "red" }}>{this.state.mensaje}</h3>
        )}
      </div>
    );
  }
}
