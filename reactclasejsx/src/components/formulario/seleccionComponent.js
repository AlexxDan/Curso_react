import React, { Component } from "react";
import Select from "react-select";

export default class seleccionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientes: [
        "Huevo",
        "Leche",
        "Pan",
        "Flan",
        "Mango",
        "Avellanas",
        "Chocholate",
      ],
      opciones: [],
      selectOption: null,
      seleccionado: "",
    };
  }
  componentWillMount = () => {
    this.generarOption();
  };

  generarOption = () => {
    var datos = [];

    this.state.ingredientes.map((ingredient, i) => {
      datos.push({
        value: ingredient,
        label: ingredient,
      });
    });
    this.setState({
      opciones: datos,
    });
  };

  mostrarSeleccionado = (seleccionado) => {
    var seleccionMulti = "";
    if (seleccionado.length > 0) {
      for (var i = 0; i < seleccionado.length; i++) {
        seleccionMulti += seleccionado[i].value + " ";
      }
    }

    this.setState({
      selectOption: seleccionado,
      seleccionado: seleccionMulti,
    });
    console.log(seleccionado);
  };

  render() {
    return (
      <div>
        <h1>Select como component exterior</h1>
        <Select
          value={this.state.selectOption}
          options={this.state.opciones}
          onChange={this.mostrarSeleccionado}
          isMulti
        ></Select>

        <h3 style={{ color: "rosybrown" }}>{this.state.seleccionado}</h3>
      </div>
    );
  }
}
