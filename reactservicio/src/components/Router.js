import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Departamento from "./Crud/Departamentos";
import InsertDept from "./Crud/InsertarDepartamento";
import EmpleadoDetalle from "./RutasEmpleados/EmpeladosDetalle";
import DetallesDepartamento from "./Crud/detalleDepartamento";
import UpdateDepartamento from "./Crud/updateDepartamento";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
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
            path="/details/:iddepartamento/:nombre/:localidad"
            render={(props) => {
              var idDept = props.match.params.iddepartamento;
              var nombre = props.match.params.nombre;
              var localidad = props.match.params.localidad;

              return (
                <DetallesDepartamento
                  iddepartamento={idDept}
                  nombreDept={nombre}
                  localidadDept={localidad}
                />
              );
            }}
          />
          <Route
            exact
            path="/update/:iddepart"
            render={(props) => {
              var idDept = props.match.params.iddepart;
              return <UpdateDepartamento iddepart={idDept} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
