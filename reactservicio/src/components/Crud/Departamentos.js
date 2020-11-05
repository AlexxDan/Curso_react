import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";

export default class Departamentos extends Component {
  state = {
    departamentos: [],
    status: false,
  };

  cargarDepartamento = () => {
    var request = "/api/departamentos";
    var url = Global.urlCRUDdept + request;

    axios.get(url).then((res) => {
      this.setState({
        departamentos: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarDepartamento();
  };

  render() {
    return (
      <div>
        <h1>Departamentos</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Número</th>
              <th>Nombre</th>
              <th>Localidad</th>
            </tr>
          </thead>
          <tbody>
            {this.state.status == true &&
              this.state.departamentos.map((dept, i) => {
                return (
                  <tr key={i}>
                    <td>{dept.numero}</td>
                    <td>{dept.nombre}</td>
                    <td>{dept.localidad}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
