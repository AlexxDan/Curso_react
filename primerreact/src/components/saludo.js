function Saludo(props) {
  var name = props.name;
  var edad = props.edad;

  // const { name,edad }=props;

  var datos = "Hoy es martes";

  return (
    <div>
      <h1>Soy el nuevo componente</h1>
      <h3>
        Saludo a {name}, con edad {edad}
      </h3>
      <h4>{datos}</h4>
    </div>
  );
}
export default Saludo;
