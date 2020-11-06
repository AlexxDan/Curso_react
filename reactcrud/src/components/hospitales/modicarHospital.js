import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default class modicarHospital extends Component {
  idHosp = React.createRef();
  nombreHosp = React.createRef();
  direccHosp = React.createRef();
  telfHosp = React.createRef();
  camasHosp = React.createRef();

  state = {
    hospital: {},
    status: false,
  };

  //En este caso solo mandos la id del hospital y lo que hacemos que antes de que se cargue la página
  //busque los datos del hospital de la api
  cargarHospital = () => {
    var request = "/webresources/hospitales/" + parseInt(this.props.idhosp);
    var url = Global.hospitales + request;
    axios.get(url).then((res) => {
      this.setState({
        hospital: res.data,
      });
    });
    console.log(this.props.idhosp);
  };

  componentDidMount = () => {
    this.cargarHospital();
  };

  //Una ves que se mande todos los datos de que se hallan querido modifcar del hospital lo que haces es capturarlo
  //haciendolo similar que el post, pero en este caso el axios se usa put
  modificarHospital = (e) => {
    e.preventDefault();
    var id = parseInt(this.idHosp.current.value);
    var nombre = this.nombreHosp.current.value;
    var direccion = this.direccHosp.current.value;
    var telefono = this.telfHosp.current.value;
    var camas = parseInt(this.camasHosp.current.value);

    var hospital = {
      idhospital: id,
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      camas: camas,
    };

    var request = "/webresources/hospitales/put";
    var url = Global.hospitales + request;
    axios.put(url, hospital).then((res) => {
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
        <h1>Modificar de Hospital</h1>
        <NavLink to="/">Lista de Hospitales</NavLink>
        <form
          onSubmit={this.modificarHospital}
          style={{ width: "500px", margin: "0 auto" }}
        >
          <label>ID Hospital</label>
          <input
            type="text"
            name="idHosp"
            ref={this.idHosp}
            className="form-control"
            readOnly
            defaultValue={this.state.hospital.idhospital}
          />
          <br />
          <label>Nombre Hospital</label>
          <input
            type="text"
            name="nombreHosp"
            ref={this.nombreHosp}
            className="form-control"
            defaultValue={this.state.hospital.nombre}
          />
          <br />
          <label>Direccion Hospital</label>
          <input
            type="text"
            name="direccion"
            ref={this.direccHosp}
            className="form-control"
            defaultValue={this.state.hospital.direccion}
          />
          <br />
          <label>Telefono Hospital</label>
          <input
            type="text"
            name="telefono"
            ref={this.telfHosp}
            className="form-control"
            defaultValue={this.state.hospital.telefono}
          />
          <br />
          <label>Cantidad Camas del Hospital</label>
          <input
            type="text"
            name="camasHosp"
            ref={this.camasHosp}
            className="form-control"
            defaultValue={this.state.hospital.camas}
          />
          <br />
          <button className="btn btn-success">Registrar</button>
        </form>
      </div>
    );
  }
}
