import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { Redirect } from "react-router-dom";

export default class registrarHospital extends Component {
  //Creamos referencia a los campos del input donde se capturaran los datos
  idHosp = React.createRef();
  nombreHosp = React.createRef();
  direccHosp = React.createRef();
  telfHosp = React.createRef();
  camasHosp = React.createRef();

  state = {
    status: false,
  };

  //Cuando se hace el submit se capturan todos los datos en los cuales se hacen la referencia
  //creamos un objeto el cual tendrá los valores capturado para enviarlos para guardar
  registrarHospital = (e) => {
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

    var request = "/webresources/hospitales/post";
    var url = Global.hospitales + request;
    //El axios en esta situación es un post lo cual tenemos que mandar la url y nuevo hospital al cual se deberá registrar
    //con la misma estructura en la cual esta guarda los hospitales en la api
    axios.post(url, hospital).then((res) => {
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
        <h1>Registro de Hospital</h1>
        <form
          onSubmit={this.registrarHospital}
          style={{ width: "500px", margin: "0 auto" }}
        >
          <label>ID Hospital</label>
          <input
            type="text"
            name="idHosp"
            ref={this.idHosp}
            className="form-control"
          />
          <br />
          <label>Nombre Hospital</label>
          <input
            type="text"
            name="nombreHosp"
            ref={this.nombreHosp}
            className="form-control"
          />
          <br />
          <label>Direccion Hospital</label>
          <input
            type="text"
            name="direccion"
            ref={this.direccHosp}
            className="form-control"
          />
          <br />
          <label>Telefono Hospital</label>
          <input
            type="text"
            name="telefono"
            ref={this.telfHosp}
            className="form-control"
          />
          <br />
          <label>Cantidad Camas del Hospital</label>
          <input
            type="text"
            name="camasHosp"
            ref={this.camasHosp}
            className="form-control"
          />
          <br />
          <button className="btn btn-success">Registrar</button>
        </form>
      </div>
    );
  }
}
