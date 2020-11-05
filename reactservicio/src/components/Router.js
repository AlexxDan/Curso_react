import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Departamento from "./Crud/Departamentos";

import EmpleadoDetalle from "./RutasEmpleados/EmpeladosDetalle";

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
        </Switch>
      </BrowserRouter>
    );
  }
}
