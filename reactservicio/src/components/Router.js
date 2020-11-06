import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Departamento from "./Crud/Departamentos";
import InsertDept from "./Crud/InsertarDepartamento";
import EmpleadoDetalle from "./RutasEmpleados/EmpeladosDetalle";
import DetallesDepartamento from "./Crud/detalleDepartamento";
import UpdateDepartamento from "./Crud/updateDepartamento";
import DeleteDepartamento from "./Crud/deleteDepartamento";
import MenuDepartamentos from "./Crud/MenuDepartamentos";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuDepartamentos />
        <Switch>
          {/* <Route
            exact
            path="/empleadosDetalle/:idempleado"
            render={(props) => {
              var idemp = props.match.params.idempleado;
              console.log("id ->" + idemp);
              return <EmpleadoDetalle idempleado={idemp} />;
            }}
          /> */}
          <Route exact path="/" component={Departamento} />
          <Route exact path="/create" component={InsertDept} />
          <Route
            exact
            path="/details/:iddepartamento"
            render={(props) => {
              var idDept = props.match.params.iddepartamento;
              return <DetallesDepartamento iddepartamento={idDept} />;
            }}
          />
          <Route
            exact
            path="/update/:iddepart/:nombre/:localidad"
            render={(props) => {
              var idDept = props.match.params.iddepart;
              var nombre = props.match.params.nombre;
              var localidad = props.match.params.localidad;
              return (
                <UpdateDepartamento
                  iddepart={idDept}
                  nombreDept={nombre}
                  localidadDept={localidad}
                />
              );
            }}
          />
          <Route
            exact
            path="/delete/:iddepartamento"
            render={(props) => {
              var idDept = props.match.params.iddepartamento;
              return <DeleteDepartamento iddepart={idDept} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
