import React, { Component } from "react";
//Primero importamos BrowserRouter, Route, Swtich de react route-dom
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Importamos todos los componetnes que vayamos a usar para llamada de cada componets
import HospitalList from "./components/hospitales/hospitales";
import DetalleHospital from "./components/hospitales/detalleHospital";
import DeleteHospital from "./components/hospitales/eliminarHospital";
import Menu from "./components/hospitales/menu";
import RegistrarHospital from "./components/hospitales/registrarHospital";
import ModifcarHospital from "./components/hospitales/modicarHospital";

export default class Router extends Component {
  render() {
    return (
      //Establecemos un sistema de ruta Browser y luego usamos un Swtich
      //para el caso que se necesite cambiar de ruta y de vista
      <BrowserRouter>
        <Menu />
        <Switch>
          {/* El route permite establecer la ruta a la cual nos diregimos , exact nos obliga que la ruta que tenga debe ser esa misma
            ya que no admite aproximado, component es a que Vista nos debemos dirigir en cuanto se cambie la pagina */}
          <Route exact path="/" component={HospitalList} />
          {/**
           * En el caso de mandar otro dato por la url la ruta debe esta :objeto el objeto es lo que se quiere mandar
           * y para mandarlo a la siguiente página debe hacerse con render . En el cual se indica con props que objeto
           * se de la ruta se va a mandar y luego hacemos return a la Vista que se usará con un el nombre de una variable.En este
           * caso se sustiye el component por el return de la Etiqueta de la vista
           */}
          <Route
            exact
            path="/details/:idhospt"
            render={(props) => {
              var idhosp = props.match.params.idhospt;
              return <DetalleHospital idHosp={idhosp} />;
            }}
          />
          <Route
            exact
            path="/delete/:idhospt"
            render={(props) => {
              var idHosp = props.match.params.idhospt;
              return <DeleteHospital idhosp={idHosp} />;
            }}
          />
          <Route exact path="/createHosp" component={RegistrarHospital} />
          <Route
            exact
            path="/update/:idhospt"
            render={(props) => {
              var idHosp = props.match.params.idhospt;
              return <ModifcarHospital idhosp={idHosp} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
