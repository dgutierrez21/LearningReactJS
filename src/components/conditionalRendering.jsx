// En React, puede renderizar componentes condicionalmente.

// Hay varias maneras de hacer esto.

// ifDeclaración
// Podemos usar el if operador de JavaScript para decidir qué componente renderizar.

// Ejemplo:
// Usaremos estos dos componentes:

function GolFallado() {
  return <h1>Haz fallado el tiro</h1>;
}

function GolHecho() {
  return <h1>Haz hecho un gol</h1>;
}

// Ahora, crearemos otro componente que elija qué componente representar en función de una condición:

function Gol(props) {
  const esGol = props.esGol;

  if (esGol) {
    return <GolHecho />;
  } else {
    return <GolFallado />;
  }
}

export function ConditionalRendering() {
  const carros = ["Audi", "BMW0", "Ferrari", "Mclaren"];
  return (
    <>
      <Gol esGol={false} />;
      <Garage carros={carros} />
      <Gol02 esGol={true} />
    </>
  );
}

// &&Operador lógico
// Otra forma de renderizar condicionalmente un componente de React es usando el && operador.

function Garage(props) {
  const carros = props.carros;

  // Si cars.length es igual a verdadero, la expresión posterior &&se representará.
  // Intenta vaciar la carsmatriz:
  return (
    <>
      <h1>Mi garaje</h1>
      {carros.length > 0 && <h2>tengo {carros.length} carros en mi garaje</h2>}
    </>
  );
}

// Operador Ternario
// Otra forma de renderizar elementos condicionalmente es usando un operador ternario.

// condition ? true : false;

// Volveremos al ejemplo de la meta.

// Devuelve el MadeGoalcomponente si isGoales true, de lo contrario devuelve el MissedGoalcomponente:

function Gol02(props) {
  const esGol = props.esGol;
  return esGol ? <GolHecho /> : <GolFallado />;
}

// https://www.w3schools.com/react/react_conditional_rendering.asp

