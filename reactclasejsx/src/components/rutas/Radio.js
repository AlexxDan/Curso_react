import LogoRadio from "./../../assets/images/radio.jpg";
import React, { Component } from "react";

export default class Radio extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "orange" }}>Home, Logo Radio</h1>
        <img src={LogoRadio} />
      </div>
    );
  }
}
