import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/cine">Cine</a>
          </li>
          <li>
            <a href="/music">Musica</a>
          </li>
          <li>
            <a href="/tv">Television</a>
          </li>
          <li>Entra</li>
        </ul>
      </div>
    );
  }
}
