import React, { Component } from "react";

export default class updateDepartamento extends Component {
  render() {
    return (
      <div>
        <h1>
          Modificar departamento {this.props.iddepart},{this.props.nombreDept} ,
          {this.props.localidadDept}{" "}
        </h1>

        {/* <form>
          <label>Nombre departamento: </label>
          <input type="text" value={this.props.nombreDept} />
          <br />
          <label>Numero departamento: </label>
          <input type="text" value={this.props.iddepartamento} readOnly/>
          <br />
          <label>Localidad departamento: </label>
          <input type="text" value={this.props.localidadDept} />
          <br />
        </form> */}
      </div>
    );
  }
}
