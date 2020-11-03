import React, { Component } from "react";

export default class seleccionMultiple extends Component {
  multiple = React.createRef();
  state = {
    ingredientes: [
      "Huevo",
      "Leche",
      "Pan",
      "Flan",
      "Mango",
      "Avellanas",
      "Chocholate",
    ],
    seleccionado: "",
  };

  generarOption = () => {
    var options = [];
    this.state.ingredientes.map((ingrediente, i) => {
      options.push(
        <option key={i} value={ingrediente}>
          {ingrediente}
        </option>
      );
    });
    return options;
  };

  mostrarSeleccionado = (e) => {
    e.preventDefault();
    var datos = "";
    var options = this.multiple.current.options;
    for (var i = 0; i < options.length; i++) {
      if (options[i].selected == true) {
        datos += options[i].value + " ";
      }
    }
    this.setState({
      seleccionado: datos,
    });
  };
  render() {
    return (
      <div>
        <h3>Seleccion Multiple</h3>
        <form onSubmit={this.mostrarSeleccionado}>
          <select name="multiple" ref={this.multiple} size="10" multiple>
            {this.generarOption()}
          </select>
          <button>Elegir</button>
        </form>
        <h4 style={{ color: "tomato" }}>
          Lista de seleccionado: {this.state.seleccionado}
        </h4>
      </div>
    );
  }
}
