import Deport from "./deporte";
import React, { Component } from "react";

export default class deportes extends Component {
  //tendremos un estado con un array de deporte
  state = {
    deportes: ["Padel", "Tenis", "Futbol", "Salto", "Ateltismo"],
    nombre: "Alumno React",
    deportFav: "",
  };

  seleccionarFavorito = (deporteFavorito) => {
    console.log("Favorito " + deporteFavorito);
    this.setState({
      deportFav: deporteFavorito,
    });
  };
  contador = 1;
  nuevoDporte = () => {
    //recuperamos los deportes que estan en el state
    var deportesAll = this.state.deportes;
    deportesAll.push("Deporte " + this.contador);
    this.setState({
      deportes: deportesAll,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Deportes de {this.state.nombre}</h2>
        <h3 style={{ color: "greenyellow" }}>
          Deporte selecionado : {this.state.deportFav}
        </h3>
        <button onClick={this.nuevoDporte}>Crear un nuevo deporte</button>
        <ul>
          {this.state.deportes.map((deport, index) => {
            return (
              <Deport
                key={index}
                deport={deport}
                seleccionarFavorito={this.seleccionarFavorito}
              />
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}
