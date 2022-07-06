import { useCallback, useState } from "react";
import TodosProblem from "./EJuseCallback/todosProblem";
import Todos from "./EJuseCallback/todos";

export function UseCallback() {
  return (
    <>
      <AppMemoProblem />
      <AppMemo />
    </>
  );
}

// React useCallbackHook devuelve una función de devolución de llamada memorizada.

// Piense en la memorización como el almacenamiento en caché de un valor para que no sea necesario volver a calcularlo.

// Esto nos permite aislar las funciones que consumen muchos recursos para que no se ejecuten automáticamente en cada renderizado.

// El useCallbackHook solo se ejecuta cuando se actualiza una de sus dependencias.

// Esto puede mejorar el rendimiento.

// Los ganchos useCallbacky useMemoson similares. La principal diferencia es que useMemodevuelve un valor memorizado y useCallbackdevuelve una función memorizada . Puede obtener más información sobre useMemo en el capítulo useMemo .

// Problema
// Una razón para usarlo useCallbackes evitar que un componente se vuelva a renderizar a menos que sus accesorios hayan cambiado.

// En este ejemplo, podría pensar que el Todoscomponente no se volverá a procesar a menos que todoscambie:

// Este es un ejemplo similar al de la sección React.memo .

function AppMemoProblem() {
  const [contador, setContador] = useState(0);
  const [todos, setTodos] = useState([]);

  const incremento = () => {
    setContador((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "Nuevo Todo"]);
  };

  return (
    <div className="container">
      <TodosProblem todos={todos} addTodo={addTodo} />
      <div className="mt-3">
        <h2>Contador: {contador}</h2>
        <button className="btn btn-primary" onClick={incremento}>
          +
        </button>
      </div>
    </div>
  );
}

// Intente ejecutar esto y haga clic en el botón de incremento de conteo.

// Notará que el Todoscomponente se vuelve a renderizar incluso cuando todosno cambia.

// ¿Por qué esto no funciona? Estamos usando memo, por lo que el Todoscomponente no debería volver a renderizarse ya que ni el todosestado ni la addTodofunción cambian cuando se incrementa el conteo.

// Esto se debe a algo llamado "igualdad referencial".

// Cada vez que se vuelve a renderizar un componente, se recrean sus funciones. Debido a esto, la addTodofunción en realidad ha cambiado.

// Solución
// Para solucionar esto, podemos usar el useCallbackgancho para evitar que la función se vuelva a crear a menos que sea necesario.

// Use el useCallbackgancho para evitar que el Todoscomponente se vuelva a renderizar innecesariamente:

function AppMemo() {
  const [contador, setContador] = useState(0);
  const [todos, setTodos] = useState([]);

  const incremento = () => {
    setContador((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "Nuevo Todo"]);
  }, [todos]);

  return (
    <div className="container border-top border-5 mt-4">
      <Todos todos={todos} addTodo={addTodo} />
      <div className="mt-4">
        <h2 className="">Contador: {contador}</h2>
        <button className="btn btn-primary" onClick={incremento}>
          +
        </button>
      </div>
    </div>
  );
}

// Ahora el Todoscomponente solo se volverá a renderizar cuando todoscambie la propiedad.

// https://www.w3schools.com/REACT/react_usecallback.asp