import logo from "./../../logo.svg";
import "./App.css";
import Saludo from "./../saludo";
import PrimerComponent from "./../primerComponent/primerComponent";
import Coche from "./../Coche/coche";

function App() {
  // const metodoPadre= description=>{
  //     console.log("Metod padre  "+description);
  // }

  // const metodoPractica = (val1, val2) => {
  //   console.log("El calculo en el padre :" + (parseInt(val1) + parseInt(val2)));
  // };

  return (
    <div className="App">
      {/* <Saludo name="Luis" edad="20" />
      <Saludo name="Marta" edad="19" /> */}
      {/* <PrimerComponent
        num1="5"
        num2="22"
        color="orange"
        metodo={metodoPractica}
      />
      <PrimerComponent
        num1="7"
        num2="25"
        color="blue"
        metodo={metodoPractica}
      /> */}
      <Coche marca="Seat" modelo="Ibiza" velocidadMax="260" accelar="15" />
    </div>
  );
}

export default App;
