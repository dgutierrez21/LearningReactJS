// React useReducer Hook
// El useReducerGancho es similar al useStateGancho.

import { useReducer } from "react";

// Permite una lógica de estado personalizada.

// Si se encuentra realizando un seguimiento de varias piezas de estado que se basan en una lógica compleja, useReducerpuede ser útil.

// Sintaxis
// El useReducer Hook acepta dos argumentos.

// useReducer(<reducer>, <initialState>)

// La reducerfunción contiene su lógica de estado personalizada y initialStatepuede ser un valor simple, pero generalmente contendrá un objeto.

// El useReducergancho devuelve el actual statey un dispatchmétodo.

// Aquí hay un ejemplo de useReduceruna aplicación de contador:

export function UseReducer() {
  return (
    <>
      <Todos />
      <Usuario />
    </>
  );
}

const initialTodos = [
  { id: 1, title: "Todo 1", complete: false },
  { id: 2, title: "Todo 2", complete: false },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <div className="m-5">
      {todos.map((todo) => (
        <div key={todo.id}>
          <label htmlFor="">
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
}

// Esta es solo la lógica para realizar un seguimiento del estado de las tareas pendientes.

// Toda la lógica para agregar, eliminar y completar una tarea pendiente podría estar contenida en un solo useReducergancho agregando más acciones.

// EJEMPLO 2

// https://javascript.plainenglish.io/react-controlled-forms-with-hooks-538762aab935

// Una alternativa a useState. Acepta un reductor de tipo (state, action) => newStatey devuelve el estado actual emparejado con un dispatchmétodo. (Si está familiarizado con Redux, ya sabe cómo funciona).

// useReducersuele ser preferible useStatecuando tiene una lógica de estado compleja que involucra múltiples subvalores o cuando el siguiente estado depende del anterior. useReducertambién le permite optimizar el rendimiento de los componentes que desencadenan actualizaciones profundas porque puede transmitir dispatchen lugar de devoluciones de llamada .

// La documentación nos dice que usemos este enlace useReducer cuando manejamos una lógica de estado compleja, y aquí donde muchas personas no consideran usar eso para una forma controlada simple, pero reducer no es más que una función que recibe un estado y devuelve uno nuevo , y nuestros cambios de entrada son exactamente eso, una función que recibe el estado real y devuelve uno nuevo cuando el usuario escribe alguna tecla en su teclado.

// Con eso en mente, veamos cómo podemos usar el gancho useReducer para resolver nuestro problema de "forma controlada con múltiples entradas".

// En primer lugar, debemos crear el estado inicial y luego crearemos un reductor que devolverá el estado con la nueva información.

// Después de eso, enviamos el reductor y el estado inicial al enlace useReducer, y ese enlace devolverá un método de estado para obtener el estado y un método de envío para realizar cambios en ese estado.

const estadoInicial = {
  nombreUsuario: "",
  contrasenia: "",
  primerApellido: "",
  segundoApellido: "",
  numeroCelular: "",
};

function reducer02(estado, { campo, valor }) {
  return {
    ...estado,
    [campo]: valor,
  };
}

function Usuario() {
  const [state, dispatch] = useReducer(reducer02, estadoInicial);

  const onChange = (evento) => {
    dispatch({ campo: evento.target.nombre, valor: evento.target.value });
  };

  const {
    nombreUsuario,
    contrasenia,
    primerApellido,
    segundoApellido,
    numeroCelular,
  } = state;

  return (
    <div className="m-5 d-flex flex-column w-25 gap-3">
      <input type="text" name="nombreUsuario" value={nombreUsuario} onChange={onChange} />
      <input name="contrasenia" value={contrasenia} onChange={onChange} />
      <input name="primerApellido" value={primerApellido} onChange={onChange} />
      <input
        name="segundoApellido"
        value={segundoApellido}
        onChange={onChange}
      />
      <input name="numeroCelular" value={numeroCelular} onChange={onChange} />
    </div>
  );
}

