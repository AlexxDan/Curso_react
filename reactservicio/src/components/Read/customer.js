import React, { Component } from "react";
import axios from "axios";

export default class customer extends Component {
  urlCustomer = "http://northwind.netcore.io/customers?format=json";
  state = {
    customers: [],
  };

  cargarClientes = () => {
    axios.get(this.urlCustomer).then((res) => {
      console.log(res.data.customers);
      this.setState({ customers: res.data.customers });
    });
  };

  componentWillMount = () => {
    this.cargarClientes();
  };

  render() {
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
  }
}
