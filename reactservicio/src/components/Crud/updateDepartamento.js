import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default class updateDepartamento extends Component {
  cajaNumeroRef = React.createRef();
  cajaNombreRef = React.createRef();
  cajaLocalidadRef = React.createRef();

  state = {
    status: false,
  };
  modificarDepartametno = (e) => {
    e.preventDefault();
    var numero = parseInt(this.cajaNumeroRef.current.value);
    var nombre = this.cajaNombreRef.current.value;
    var localidad = this.cajaLocalidadRef.current.value;

    var dept = {
      numero: numero,
      nombre: nombre,
      localidad: localidad,
    };
    var request = "/api/Departamentos/";
    var url = Global.urlCRUDdept + request;
    axios.put(url, dept).then((res) => {
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
        <h1>
          Modificar departamento {this.props.iddepart},{this.props.nombreDept} ,
          {this.props.localidadDept}
        </h1>
        <NavLink to={"/details/" + this.props.iddepart}>
          Detalle departamento
        </NavLink>
        <form
          onSubmit={this.modificarDepartametno}
          style={{ width: "500px", margin: "0 auto" }}
        >
          <label>Numero departamento: </label>
          <input
            type="text"
            value={this.props.iddepart}
            readOnly
            name="cajaNumeroRef"
            ref={this.cajaNumeroRef}
            className="form-control"
          />
          <br />
          <label>Nombre departamento: </label>
          <input
            type="text"
            defaultValue={this.props.nombreDept}
            name="cajaNombreRef"
            ref={this.cajaNombreRef}
            className="form-control"
          />
          <br />
          <label>Localidad departamento: </label>
          <input
            type="text"
            defaultValue={this.props.localidadDept}
            name="cajaLocalidadRef"
            ref={this.cajaLocalidadRef}
            className="form-control"
          />
          <br />
          <button>Modificar</button>
        </form>
      </div>
    );
  }
}
