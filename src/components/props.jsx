export function Props(props) {
  return (
    <>
      <h1 style={{backgroundColor: props.bgColor}}>{props.titulo}</h1>
      <p>{props.nombre}</p>
      <p>{props.edad}</p>
    </>
  );
}
