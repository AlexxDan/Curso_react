import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./rutas/Radio";
import Cine from "./rutas/Cine";
import Tele from "./rutas/Television";
import Musica from "./rutas/Musica";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/cine" component={Cine}></Route>
          <Route path="/tv" component={Tele}></Route>
          <Route path="/music" component={Musica}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
