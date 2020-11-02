import React, { Component } from "react";
import LogoCine from "./../../assets/images/cine.jpg";

export default class cine extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "orange" }}>Logo Cine</h1>
        <img src={LogoCine} />
      </div>
    );
  }
}
