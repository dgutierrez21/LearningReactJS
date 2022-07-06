import { useState } from "react";

export function StateAndUseState() {
  // desestructuracion
  // useState regresa una variable y una funcion que cambio el valor de la variable
  const [contador, setContador] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  function sumarContador() {
    setContador(contador + 1);
  }

  function mostrarOcultar() {
    setMostrar(!mostrar);
  }

  return (
    <>
      <div className="container">
        <h1>Estado y useState en ReactJS</h1>
        {mostrar ? <h2>{contador}</h2> : null}
        <button onClick={sumarContador}>S U M A R</button>
        <button onClick={mostrarOcultar}>Mostrar / Ocultar</button>
      </div>
    </>
  );
}
