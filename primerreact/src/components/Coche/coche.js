import React, { useState } from "react";

function Coche(props) {
  var coche = {
    marca: props.marca,
    modelo: props.modelo,
    velocMax: parseInt(props.velocidadMax),
    accelar: parseInt(props.accelar),
  };

  const [estado, setEstado] = useState(false);
  const llamarEstado = () => {
    if (estado == true) {
      return <span style={{ color: "green" }}>Arrancado</span>;
    } else {
      return <span style={{ color: "red" }}>Parado</span>;
    }
  };
  const cambiarEstado = () => {
    setEstado(!estado);
  };

  const [velodcidad, setVelocidad] = useState(0);
  const aumentarVelocidad = () => {
    if (estado == true) {
      if (velodcidad < coche.velocMax) {
        setVelocidad(velodcidad + coche.accelar);
      } else {
        setVelocidad(velodcidad - (velodcidad - coche.velocMax));
        alert("No se puede acelerar más , se ha alcanzado el limite");
      }
    } else {
      setVelocidad(0);
      console.log("LA velocidad es 0");
    }
  };
  const mostrarVelocidad = () => {
    return <div>{velodcidad}</div>;
  };

  return (
    <div>
      <h1 style={{ color: "forestgreen" }}>
        {coche.marca},{coche.modelo}
      </h1>
      <h1>Estado del coche .... {llamarEstado()}</h1>
      <button onClick={() => cambiarEstado()}>Cambiar estado del coche</button>
      <h3 style={{ color: "blue" }}>Velocidad Actual : {mostrarVelocidad()}</h3>
      <button onClick={() => aumentarVelocidad()}>Incrementar Velocidad</button>
    </div>
  );
}
export default Coche;
