import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { Redirect } from "react-router-dom";

export default class eliminarHospital extends Component {
  state = {
    status: false,
  };
  //En este caso se debe hacer una eliminacion por lo que tenemos que hacer
  //hacer una consulta con axios similar a get pero con delete para eliminar
  //dicho hospital
  eliminarHospital = () => {
    var idHospital = parseInt(this.props.idhosp);
    var resquest = "/webresources/hospitales/delete/" + idHospital;
    var url = Global.hospitales + resquest;
    axios.delete(url).then((res) => {
      this.setState({
        status: true,
      });
    });
  };
  render() {
    //El redicrect lo que hace es redireccionarnos a otra página en cuanto se cumple la condicion
    if (this.state.status == true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1 style={{ color: "red" }}>
          ¿Seguro de que desea eliminar dicho hospital con ID{" "}
          {this.props.idhosp}
        </h1>
        <button onClick={this.eliminarHospital}>Eliminar Hospital</button>
      </div>
    );
  }
}
