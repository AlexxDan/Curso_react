import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { Redirect } from "react-router-dom";

export default class deleteDepartamento extends Component {
  state = { status: false };

  eliminarDepartamento = () => {
    var idDepartamento = parseInt(this.props.iddepart);
    var request = "/api/Departamentos/" + idDepartamento;
    var url = Global.urlCRUDdept + request;
    axios.delete(url).then((res) => {
      this.setState({
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
        <h1 style={{ color: "red" }}>
          ¿Desea eliminar el departamento {this.props.iddepart} ?
        </h1>
        <button onClick={this.eliminarDepartamento} className="btn btn-danger">
          Eliminar
        </button>
      </div>
    );
  }
}
