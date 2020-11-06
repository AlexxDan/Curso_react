import React, { Component } from "react";
//Importamos el axios y global
import axios from "axios";
import Global from "./../../Global";
import { NavLink } from "react-router-dom";

export default class hospitales extends Component {
  //Creamos un statedonde se guardara todos los datos de los hospitales

  state = {
    hospitales: [],
    status: false,
  };

  //hacemos la consulta de los hospitales con un axios get
  //guardamos todos los datos en el state
  cargarHospitales = () => {
    var request = "/webresources/hospitales";
    var url = Global.hospitales + request;

    axios.get(url).then((res) => {
      this.setState({
        hospitales: res.data,
        status: true,
      });
    });
  };
  //declaramos un componentdidMount para que ejecute la llamada a
  //a la api a la consulta de los hospitales
  componentDidMount = () => {
    this.cargarHospitales();
  };

  render() {
    return (
      <div>
        <h2>Lista Hospitales</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Cant camas</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.status == true &&
              this.state.hospitales.map((hospt, i) => {
                return (
                  <tr key={i}>
                    <td>{hospt.idhospital}</td>
                    <td>{hospt.nombre}</td>
                    <td>{hospt.direccion}</td>
                    <td>{hospt.telefono}</td>
                    <td>{hospt.camas}</td>
                    <td>
                      <NavLink to={"/details/" + hospt.idhospital}>
                        Detalles
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
