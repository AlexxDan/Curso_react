import logo from "./../../logo.svg";
import "./App.css";
import Customer from "./../Read/customer";
import BuscarCustomer from "./../Read/buscarCustomer";
import BuscadorCoches from "./../Read/buscadorCoche";
import Departamento from "./../dept_emp/departamento";
import Router from "./../Router";
import EmpleadoRouter from "./../RutasEmpleados/EmpleadoRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Departamentos from "./../Crud/Departamentos";
import MenuDepartamentos from "./../Crud/MenuDepartamentos";

function App() {
  return (
    <div className="App">
      {/* <Customer /> 
      <BuscarCustomer />
      <BuscadorCoches />
      <Departamento />
      <EmpleadoRouter />
      <hr />
      <Router />*/}
      <MenuDepartamentos />
      <Router />
    </div>
  );
}

export default App;
