import logo from "./../../logo.svg";
import "./App.css";
import Numeros from "./../numeros/numeros";
import Comics from "./../comics/comics";
import PrimeraClase from "./../primeraClase/primeraClase";
import Deportes from "./../deporte/deportes";
import Menu from "./../rutas/Menu";
import Collatz from "./../formulario/collatz";
import Router from "./../Router";
import SeleccionSimple from "./../formulario/seleccionSumple";
import SelectMultiple from "./../formulario/seleccionMultiple";
import SelectMultComic from "./../formulario/sleccionMutipleComics";
import SeleccionComponents from "./../formulario/seleccionComponent";

function App() {
  return (
    <div className="App">
      {/* <Numeros /> 
      <Comics />
      <PrimeraClase />
      <Deportes />
      <Menu />
      <Router />
      <Collatz />
      <SeleccionSimple />      
      <SelectMultiple />
      <SelectMultComic />*/}
      <SeleccionComponents />
    </div>
  );
}

export default App;
