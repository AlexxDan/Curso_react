import LogoTv from "./../../assets/images/tv.jpg";
import React, { Component } from "react";

export default class Televisionn extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "orange" }}>Logo TV</h1>
        <img src={LogoTv} />
      </div>
    );
  }
}
