import { memo } from "react";

function TodosProblem({ todos, addTodo }) {
  console.log("Child Render");
  return (
    <>
      <h2>Mis Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button className="btn btn-primary" onClick={addTodo}>
        Añadir Todo
      </button>
    </>
  );
}

export default memo(TodosProblem);