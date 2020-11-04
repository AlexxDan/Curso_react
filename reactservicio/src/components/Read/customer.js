import React, { Component } from "react";
import axios from "axios";

export default class customer extends Component {
  urlCustomer = "http://northwind.netcore.io/customers?format=json";
  state = {
    customers: [],
    status: [],
  };

  cargarClientes = () => {
    axios.get(this.urlCustomer).then((res) => {
      console.log(res.data.customers);
      this.setState({ customers: res.data.customers, status: "success" });
    });
  };

  componentWillMount = () => {
    this.cargarClientes();
  };

  render() {
    if (this.state.customers.length > 0) {
      return (
        <div>
          <h1>Api Servicios Customers</h1>

          {/* {this.state.customers.map((custom, index) => {
            return <h5 key={custom.id}>{custom.contactName}</h5>;
          })} */}

          {/*Otra forma de de recorrer con un map*/}
          {this.state.customers.map((custom) => {
            return <h5 key={custom.id}>{custom.contactName}</h5>;
          })}
        </div>
      );
    } else if (this.state.customers.length == 0) {
      return <h1>No hay clientes</h1>;
    } else if (this.state.status != "success") {
      return <h1>Cargando servicio</h1>;
    } else {
      return <h1>Error no calculado</h1>;
    }
  }
}
