import logo from "./../../logo.svg";
import "./App.css";
import Numeros from "./../numeros/numeros";
import Comics from "./../comics/comics";
import PrimeraClase from "./../primeraClase/primeraClase";
import Deportes from "./../deporte/deportes";
import Menu from "./../rutas/Menu";
import Collatz from "./../formulario/collatz";
import Router from "./../Router";

function App() {
  return (
    <div className="App">
      {/* <Numeros /> 
      <Comics />
      <PrimeraClase />
      <Deportes />
      <Menu />
      <Router />*/}
      <Collatz />
    </div>
  );
}

export default App;
