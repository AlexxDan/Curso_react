import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { NavLink } from "react-router-dom";

export default class detalleHospital extends Component {
  //Con el constructor capturamos los props que nos manden de
  //otras páginas. El super es quien exactamente nos lo permite
  constructor(props) {
    super(props);
    //capturamos el props
  }

  state = {
    hospital: {},
    status: false,
  };

  buscarHospital = () => {
    var request = "/webresources/hospitales/" + parseInt(this.props.idHosp);
    var url = Global.hospitales + request;
    console.log();
    axios.get(url).then((res) => {
      this.setState({
        hospital: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.buscarHospital();
  };

  render() {
    return (
      <div>
        {this.state.status == true && (
          <React.Fragment>
            <NavLink to="/">Volver al listo</NavLink>
            <h1>ID: {this.state.hospital.idhospital}</h1>
            <h1>Nombre: {this.state.hospital.nombre}</h1>
            <h1>Direccion: {this.state.hospital.direccion}</h1>
            <h1>Telefono: {this.state.hospital.telefono}</h1>
            <h1>Camas: {this.state.hospital.camas}</h1>

            <NavLink
              to={"/update/" + this.state.hospital.idhospital}
              className="btn btn-warning"
            >
              Modificar hospital
            </NavLink>
            <NavLink
              to={"/delete/" + this.state.hospital.idhospital}
              className="btn btn-danger"
            >
              Eliminar hospital
            </NavLink>
          </React.Fragment>
        )}
      </div>
    );
  }
}
