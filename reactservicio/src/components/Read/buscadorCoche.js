import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import "./buscarCoche.css";

export default class buscadorCoche extends Component {
  marcaCoche = React.createRef();
  state = {
    allCoches: [],
    status: "",
  };
  cargarCoches = () => {
    var request = "webresources/coches";
    var url = Global.coche + request;

    axios.get(url).then((res) => {
      this.setState({
        allCoches: res.data,
        status: "success",
      });
    });
  };

  componentWillMount = () => {
    this.cargarCoches();
  };
  buscarMarca = (e) => {
    e.preventDefault();
    var marca = this.marcaCoche.current.value;
    /* var filtrados = [];

    this.state.allCoches.forEach((coche) => {
      if (coche.marca == marca) {
        filtrados.push(coche);
      }
    });*/

    var filtrados = this.state.allCoches.filter(
      (coche) => coche.marca == marca
    );

    this.setState({
      allCoches: filtrados,
    });
  };

  render() {
    if (this.state.status == "success") {
      return (
        <div>
          <form onSubmit={this.buscarMarca}>
            <label>Marca</label>
            <input type="text" ref={this.marcaCoche} name="marcaCoche" />
            <button>Buscar Cocches por marcas</button>
            <br />
            <button onClick={this.cargarCoches}>Recargar Tabla</button>
          </form>
          <table border="1">
            <thead>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Conductor</th>
              <th>Imagen</th>
            </thead>
            <tbody>
              {this.state.allCoches.map((coche) => {
                return (
                  <tr key={coche.idcoche}>
                    <td>{coche.marca}</td>
                    <td>{coche.modelo}</td>
                    <td>{coche.conductor}</td>
                    <td>
                      <img src={coche.imagen} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else if (this.state.status != "success") {
      return (
        <div>
          <h3 style={{ color: "red" }}>Error al cargar los datos</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Procesando informacion</h3>
        </div>
      );
    }
  }
}
