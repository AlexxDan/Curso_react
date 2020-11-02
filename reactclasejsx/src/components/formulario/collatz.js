import React, { Component } from "react";

export default class collatz extends Component {
  numero = React.createRef();

  state = {
    numeros: {},
  };
  calcularValor = (e) => {
    e.preventDefault();
    var num = parseInt(this.numero.current.value);
    var arrayNum = [];
    var calculo = 0;
    while (num != 1) {
      if (num % 2 == 0) {
        calculo = num / 2;
        arrayNum.push(calculo);
        num = calculo;
      } else if (num % 2 == 1) {
        calculo = num * 3 + 1;
        arrayNum.push(calculo);
        num = calculo;
      }
    }
    console.log(arrayNum);
    this.setState({
      numeros: arrayNum,
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.calcularValor}>
          <label htmlFor="numero">Numero</label>
          <input type="text" ref={this.numero} name="numero" />
          <button>Calcular valroes</button>
        </form>
        {this.state.numeros.length > 0 && (
          <ul>
            {this.state.numeros.map((num, index) => {
              return <li key={index}>{num}</li>;
            })}
          </ul>
        )}
      </React.Fragment>
    );
  }
}
