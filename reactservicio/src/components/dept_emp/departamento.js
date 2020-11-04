import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import Empleado from "./empleado";
import Detalle from "./detalle";

export default class departamento extends Component {
  selecDep = React.createRef();

  state = {
    departamentos: [],
    empleados: [],
    detalle: {},
  };

  cargarEmpelados = () => {
    var request = "api/departamentos";
    var url = Global.departmento + request;

    axios.get(url).then((res) => {
      this.setState({
        departamentos: res.data,
      });
    });
  };

  componentWillMount = () => {
    this.cargarEmpelados();
  };

  buscarEmpelados = (e) => {
    e.preventDefault();
    var deptNum = parseInt(this.selecDep.current.value);
    var request = "api/Empleados/EmpleadosDepartamento/";

    var url = Global.empleado + request + deptNum;

    axios.get(url).then((res) => {
      this.setState({
        empleados: res.data,
      });
    });
  };

  detalleEmpleado = (idEmp) => {
    var filtrado = this.state.empleados.filter(
      (empleado) => empleado.idEmpleado === idEmp
    );

    console.log(filtrado);

    this.setState({
      empleados: [],
      detalle: filtrado,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.buscarEmpelados}>
          <label>Departamentos</label>
          <select name="selecDep" ref={this.selecDep}>
            {this.state.departamentos.map((dept) => {
              return (
                <option value={dept.Numero} key={dept.Numero}>
                  {dept.Nombre}
                </option>
              );
            })}
          </select>
          <button>Buscar Empleados</button>
        </form>
        {this.state.empleados.length > 0 && (
          <ul>
            {this.state.empleados.map((empleado) => {
              return (
                <Empleado
                  emp={empleado}
                  key={empleado.idEmpleado}
                  detalleEmpleado={this.detalleEmpleado}
                />
              );
            })}
          </ul>
        )}
        {this.state.detalle.length > 0 && (
          <table>
            <thead>
              <th>Id</th>
              <th>Apellido</th>
              <th>Oficio</th>
              <th>Salario</th>
              <th>Departameto</th>
            </thead>
            <tbody>
              <Detalle detalle={this.state.detalle}></Detalle>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
