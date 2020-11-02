import LogoMusica from "./../../assets/images/music.jpg";
import React, { Component } from "react";

export default class Musica extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "orange" }}>Logo Musica</h1>
        <img src={LogoMusica} />
      </div>
    );
  }
}
