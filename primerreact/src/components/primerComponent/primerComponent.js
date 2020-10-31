function PrimerComponent(props) {
  const { num1, num2, color, metodo } = props;

  var estilo = {
    backgroundColor: color,
  };

  const sumar = (num1, num2) => {
    var sumar = parseInt(num1) + parseInt(num2);
    console.log("La suma en el hijo es " + sumar);
  };
  return (
    <div>
      <h3 style={estilo}>Practica</h3>
      <button onClick={() => sumar(num1, num2)}>Calcular Hijo</button>
      <button onClick={() => metodo(num1, num2)}>Calcular Hijo</button>
    </div>
  );
}
export default PrimerComponent;
