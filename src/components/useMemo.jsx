import { useMemo } from "react";
import { useState } from "react";

export function UseMemo() {
  return (
    <>
      <h1>UseMemo</h1>
      <AppMemoProblem />
      <AppMemo />
    </>
  );
}

// El React useMemoHook devuelve un valor memorizado.

// Piense en la memorización como el almacenamiento en caché de un valor para que no sea necesario volver a calcularlo.

// El useMemoHook solo se ejecuta cuando se actualiza una de sus dependencias.

// Esto puede mejorar el rendimiento.

// Los ganchos useMemoy useCallbackson similares. La principal diferencia es que useMemodevuelve un valor memorizado y useCallbackdevuelve una función memorizada.

// PERFORMANCE

// El useMemogancho se puede utilizar para evitar que funciones costosas y que consumen muchos recursos se ejecuten innecesariamente.

// En este ejemplo, tenemos una función costosa que se ejecuta en cada renderizado.

// Al cambiar el conteo o agregar una tarea pendiente, notará un retraso en la ejecución.

// EJEMPLO

// Una función de bajo rendimiento. La expensiveCalculation función se ejecuta en cada renderizado:

function calculoCostoso(num) {
  console.log("Calculando...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
}

function AppMemoProblem() {
  const [contador, setContador] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculo = calculoCostoso(contador);

  const incremento = () => {
    setContador((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "Nuevo Todo"]);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center border-bottom border-5">
      <div>
        <h2>Mis Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button className="btn btn-primary" onClick={addTodo}>
          Añadir Todo
        </button>
      </div>
      <div className="mt-5">
        <p className="d-inline-block">Contador: {contador}</p>
        <button className="btn btn-primary" onClick={incremento}>
          +
        </button>
        <h2>Calculo Costoso</h2>
        <p className="fw-bold">{calculo}</p>
      </div>
    </div>
  );
}

// Usar useMemo
// Para solucionar este problema de rendimiento, podemos usar el useMemogancho para memorizar la expensiveCalculationfunción. Esto hará que la función solo se ejecute cuando sea necesario.

// Podemos envolver la costosa llamada de función con useMemo.

// El useMemoHook acepta un segundo parámetro para declarar dependencias. La función costosa solo se ejecutará cuando sus dependencias hayan cambiado.

// En el siguiente ejemplo, la función costosa solo se ejecutará cuando count se cambie y no cuando se agreguen tareas pendientes.

function calculoCostoso02(num) {
  console.log("Calculando...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
}

function AppMemo() {
  const [contador, setContador] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculo = useMemo(() => calculoCostoso02(contador), [contador]);

  const incremento = () => {
    setContador((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "Nuevo Todo"]);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-3">
      <div>
        <h2>Mis Todos 02</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button className="btn btn-primary" onClick={addTodo}>
          Añadir Todo
        </button>
      </div>
      <hr />
      <div className="mt-5">
        <p className="d-inline-block">Contador: {contador}</p>
        <button className="btn btn-primary" onClick={incremento}>
          +
        </button>
        <h2>Calculo Costoso</h2>
        <p className="fw-bold">{calculo}</p>
      </div>
    </div>
  );
}
