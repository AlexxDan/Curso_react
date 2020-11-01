import logo from "./../../logo.svg";
import "./App.css";
import Numeros from "./../numeros/numeros";
import Comics from "./../comics/comics";
import PrimeraClase from "./../primeraClase/primeraClase";
import Deportes from "./../deporte/deportes";

function App() {
  return (
    <div className="App">
      {/* <Numeros /> 
      <Comics />
      <PrimeraClase />*/}
      <Deportes />
    </div>
  );
}

export default App;
