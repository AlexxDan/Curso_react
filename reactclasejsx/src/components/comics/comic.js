import React, { Component } from "react";

export default class comic extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.comic.titulo}</h1>
        <img src={this.props.comic.imagen} alt={this.props.comic.titulo} />
        <p>{this.props.comic.descripcion}</p>
        <button
          onClick={() => {
            this.props.seleccionarComic(this.props.comic);
          }}
        >
          Seleccionar Favorito
        </button>
      </div>
    );
  }
}
