// El useRefgancho le permite persistir valores entre renderizados.

import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

// Se puede usar para almacenar un valor mutable que no provoca una nueva representación cuando se actualiza.

// Se puede utilizar para acceder a un elemento DOM directamente.

// El hook de useRefs lo quen nos permite es crear un objeto que dentro de ese objeto vamos a tener una propiedad llamada current
// y el valor de esa propiedad no va a cambiar a menos que nosotros la establezcamos.

// Este objetos tiene dos caracteristicas interesantes:

// 1. Este objeto va a tener el valor actual y ese valor va a ser persistente, esto significa que en este caso si se presiona el boton el valor va a seguir siendo el mismo siempre

// 2. El valor lo podemos modificar como nosotros queramos, esto lo podemos ver como una variable que el valor de esa variable no se va a perder entre cambios de estado.

// 3. Si cambiamos el valor de esa variable nuestra app no se va a volver a renderizar

export function Refs() {
  const [contador, setContador] = useState(0);

  const nombre = useRef("Carlos");
  const cuentaRenderizado = useRef(0);
  const botonContador = useRef();

  function cambiarNombre() {
    nombre.current = "Arturo";
    console.log(`Tu nuevo nombre es ${nombre.current}`);
  }

  useEffect(() => {
    console.log((botonContador.current.textContent = "Hola"));

    if (cuentaRenderizado.current === 0) {
      cuentaRenderizado.current = cuentaRenderizado.current + 1;
      return;
    }

    console.log(`El valor del contador es: ${contador}`);
  }, [contador]);

  return (
    <>
      <h1 className="ms-3 mt-3">valor = {contador}</h1>
      <button
        ref={botonContador}
        className="btn btn-primary mb-5"
        onClick={() => setContador(contador + 1)}
      >
        Suma
      </button>
      <h1 className="ms-3">nombre : {nombre.current}</h1>
      <button className="btn btn-primary" onClick={cambiarNombre}>
        Cambiar nombre
      </button>
    </>
  );
}

// EJEMPLO 2

// No causa re-renderizaciones #ff0
// Si tratáramos de contar cuántas veces nuestra aplicación se renderiza usando el useStateHook, estaríamos atrapados en un bucle infinito ya que este Hook en sí mismo provoca una nueva renderización.

// Para evitar esto, podemos usar el useRefHook.

export function Refs02() {
  const [valorInput, setValorInput] = useState("");
  const contador = useRef(0);

  useEffect(() => {
    contador.current = contador.current + 1;
  });

  return (
    <div className="container-fluid">
      <input
        className="d-block mt-5"
        type="text"
        name=""
        id=""
        value={valorInput}
        onChange={(evento) => setValorInput(evento.target.value)}
      />
      <h2 className="mt-3">contador renderizado:{contador.current}</h2>
    </div>
  );
}

// useRef()solo devuelve un artículo. Devuelve un Objeto llamado current.

// Cuando inicializamos useRefestablecemos el valor inicial: useRef(0).

// Es como hacer esto: const count = {current: 0}. Podemos acceder al conteo usando count.current.

// Ejecute esto en su computadora e intente escribir la entrada para ver cómo aumenta el recuento de procesamiento de la aplicación.

// Acceso a elementos DOM #ff0
// En general, queremos dejar que React maneje toda la manipulación del DOM.

// Pero hay algunos casos en los que useRefse puede usar sin causar problemas.

// En React, podemos agregar un refatributo a un elemento para acceder a él directamente en el DOM.

export function Refs03() {
  const inputElement = useRef();

  function focusInput() {
    inputElement.current.focus();
  }

  return (
    <div className="m-5">
      <input type="text" ref={inputElement} />
      <button className="btn btn-primary" onClick={focusInput}>
        Focus input
      </button>
    </div>
  );
}

// Seguimiento de cambios de estado #Ff0
// El useRefgancho también se puede utilizar para realizar un seguimiento de los valores de estado anteriores.

// Esto se debe a que podemos persistir useRefvalores entre renderizados.

export function Refs04() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <div className="m-5">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Valor actual:{inputValue}</h2>
      <h2>Valor anterior:{previousInputValue.current}</h2>
    </div>
  );
}

// Esta vez usamos una combinación de useState, useEffect y useRef para realizar un seguimiento del estado anterior.

// En useEffect, estamos actualizando el useRef valor actual cada vez inputValue que se actualiza ingresando texto en el campo de entrada.

