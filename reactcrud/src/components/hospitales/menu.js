import React, { Component } from "react";
import { NavLink } from "react-router-dom";

//El menu de departamaneto será el objeto estatico en la pagina. Este menu se un plantilla que se encuentra en la página oficial
//de boostrap . Solo se modifica lo que se necesita. Hay que cambiar todas las class por className
export default class menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/createHosp">
                Registrar Hospital
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
