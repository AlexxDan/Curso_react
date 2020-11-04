import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";

export default class buscarCustomer extends Component {
  urlCustomer = "http://northwind.netcore.io/customers?format=json";
  cajaCustomerRef = React.createRef();

  state = {
    customers: {},
    status: false,
  };
  buscarClinete = (e) => {
    e.preventDefault();
    var idCLiente = this.cajaCustomerRef.current.value;
    var request = idCLiente + "?format=json";
    var url = Global.urlnorthwind + request;

    axios.get(url).then((res) => {
      this.setState({
        customers: res.data.customer,
        status: true,
      });
    });
  };

  componentWillMount = () => {};

  render() {
    return (
      <div>
        <form onSubmit={this.buscarClinete}>
          <label>Id customers:</label>
          <input
            type="text"
            name="cajaCustomer"
            ref={this.cajaCustomerRef}
            name="name"
          />
          <button>Buscar cliente</button>
        </form>
        {this.state.status == true && (
          <React.Fragment>
            <h1 style={{ color: "blue" }}>
              Name: {this.state.customers.contactName}
            </h1>
            <h2>Company: {this.state.customers.companyName}</h2>
            <h3>Oficio: {this.state.customers.contactTitle}</h3>
          </React.Fragment>
        )}
      </div>
    );
  }
}
