import logo from "./../../logo.svg";
import "./App.css";
import Customer from "./../Read/customer";
import BuscarCustomer from "./../Read/buscarCustomer";
import BuscadorCoches from "./../Read/buscadorCoche";
import Departamento from "./../dept_emp/departamento";

function App() {
  return (
    <div className="App">
      {/* <Customer /> 
      <BuscarCustomer />
      <BuscadorCoches />*/}
      <Departamento />
    </div>
  );
}

export default App;
