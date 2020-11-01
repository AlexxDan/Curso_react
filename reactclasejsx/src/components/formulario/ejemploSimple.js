import React, { Component } from "react";

export default class ejemploSimple extends Component {
  //Propiedades para enlazar los input
  nombre = React.createRef();
  apellidos = React.createRef();
  numero = React.createRef();

  //para dibujar necesitamos un state
  state = {
    usuario: {},
    numero: {},
  };

  //Metodo para captura los datos
  recibirDatos = (e) => {
    //En react , debemos cortar el submit para trabajr en front
    e.preventDefault();
    console.log(this.nombre.current.value + " " + this.apellidos.current.value);
    var user = {
      nombre: this.nombre.current.value,
      apellidos: this.apellidos.current.value,
    };
    this.setState({
      usuario: user,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Ejemplo SImple FOrmulario</h1>
        <form onSubmit={this.recibirDatos}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            ref={this.nombre}
            name="nombre"
            onChange={this.recibirDatos}
          />
          <br />
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            ref={this.apellidos}
            name="apellidos"
            onChange={this.recibirDatos}
          />
          <br />
          <br />
          <button>Enviar datos</button>
          {this.state.usuario && (
            <div>
              <h3>{this.state.usuario.nombre}</h3>
              <h3>{this.state.usuario.apellidos}</h3>
            </div>
          )}
        </form>
      </React.Fragment>
    );
  }
}
