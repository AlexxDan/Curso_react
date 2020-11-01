import React, { Component } from "react";

export default class deporte extends Component {
  state = {
    seleccionado: "",
  };

  selecionarDeporte = () => {
    //cuando pulsemos el boton , llamaremos al metodo
    //del padre qye nos han enviaod en props
    this.props.seleccionarFavorito(this.props.deport);
    console.log(this.props.deport);
    this.setState({
      seleccionado: this.props.deport,
    });
  };

  render() {
    return (
      <React.Fragment>
        <li style={{ color: "blue" }}>
          {this.props.deport}
          <button onClick={this.selecionarDeporte}>Selecionar Deporte</button>
          {/* <span style={{color:"red"}}>
                               {this.state.seleccionado}
                                </span> */}
        </li>
      </React.Fragment>
    );
  }
}
