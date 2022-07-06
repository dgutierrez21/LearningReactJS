export function ListAndKeys() {
  const numbers = [11, 12, 13, 14, 15];
  const numbers02 = [1, 2, 3, 4, 5];
  return (
    <>
      <Ejemplo1 />
      <Ejemplo2 />
      <NumberList numbers={numbers} />
      <NumberList02 numbers={numbers} />
      <NumberList03 numbers={numbers02} />
      <Listado />
    </>
  );
}
// Listas y keys
// Primero, vamos a revisar como transformas listas en Javascript.

// Dado el código de abajo, usamos la función map() para tomar un array de numbers y duplicar sus valores. Asignamos el nuevo array devuelto por map() a la variable doubled y la mostramos:

// Este código muestra [2, 4, 6, 8, 10] a la consola.

function Ejemplo1() {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => number * 2);
  return <h1>{doubled}</h1>;
}

// En React, transformar arrays en listas de elementos es casi idéntico.

// Renderizado de Múltiples Componentes
// Puedes hacer colecciones de elementos e incluirlos en JSX usando llaves {}.

// Debajo, recorreremos el array numbers usando la función map() de Javascript. Devolvemos un elemento <li> por cada ítem . Finalmente, asignamos el array de elementos resultante a listItems:

function Ejemplo2() {
  const numbers = [6, 7, 8, 9, 10];
  const doubled = numbers.map((number) => number * 2);
  const listItems = doubled.map((number) => <li>{number}</li>);
  // Entonces, podemos incluir el array listItems completo dentro de un elemento <ul>:

  // Nota: Notar que a pesar de que el componente se renderiza correctamente nos da un error en la consola, mas adelante veremos el porque.
  return <ul>{listItems}</ul>;
}

// Componente básico de lista
// Usualmente renderizarías listas dentro de un componente.

// Podemos refactorizar el ejemplo anterior en un componente que acepte un array de numbers e imprima una lista de elementos.

function NumberList(props) {
  const numbers = props.numbers;
  const doubled = numbers.map((number) => number * 2);
  const listItems = doubled.map((number) => <li>{number}</li>);

  return <ul>{listItems}</ul>;
}

// Cuando ejecutes este código, serás advertido que una key debería ser proporcionada para ítems de lista.
// Una “key” es un atributo especial string que debes incluir al crear listas de elementos. Vamos a discutir por qué esto es importante en la próxima sección.

// Vamos a asignar una key a nuestra lista de ítems dentro de numbers.map() y arreglar el problema de la falta de key.

function NumberList02(props) {
  const numbers = props.numbers;
  const doubled = numbers.map((number) => number * 2);
  const listItems = doubled.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));

  return <ul>{listItems}</ul>;
}

// Keys
// Las keys ayudan a React a identificar que ítems han cambiado, son agregados, o son eliminados.
// Las keys deben ser dadas a los elementos dentro del array para darle a los elementos una identidad estable:

// La mejor forma de elegir una key es usando un string que identifique únicamente a un elemento de la lista entre sus hermanos. Habitualmente vas a usar IDs de tus datos como key:

// Cuando no tengas IDs estables para renderizar, puedes usar el índice del ítem como una key como último recurso:

// No recomendamos usar índices para keys si el orden de los ítems puede cambiar. Esto puede impactar negativamente el rendimiento y puede causar problemas con el estado del componente.

// Extracción de componentes con keys
// Las keys solo tienen sentido en el contexto del array que las envuelve.

// Por ejemplo, si extraes un componente ListItem, deberías mantener la key en los elementos <ListItem /> del array en lugar de en el elemento <li> del propio ListItem.

// Ejemplo: Uso Correcto de Key

function NumberList03(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // Correcto! La key debería ser especificada dentro del array.
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

function ListItem(props) {
  // Correcto! No hay necesidad de especificar la key aquí:
  return <li>{props.value}</li>;
}

// Una buena regla es que los elementos dentro de map() necesitan keys.

// Las keys deben ser únicas solo entre hermanos
// Las keys usadas dentro de arrays deberían ser únicas entre sus hermanos. Sin embargo, no necesitan ser únicas globalmente. Podemos usar las mismas keys cuando creamos dos arrays diferentes:

// Las keys sirven como una sugerencia para React pero no son pasadas a tus componentes. Si necesitas usar el mismo valor en tu componente, pásasela explícitamente como una propiedad con un nombre diferente:

// EJEMPLO 2

const jsonNombres = [
  {
    key: 1,
    nombre: "Pablo",
  },
  {
    key: 2,
    nombre: "Ana",
  },
  {
    key: 3,
    nombre: "José",
  },
];

function Listado() {
  const renderListado = () => {
    return jsonNombres.map((value) => (
      <li className="list-group-item" key={value.key}>
        {value.nombre}
      </li>
    ));
  };

  return (
    <div className="container text-center fs-3 fw-bold">
      <ul className="list-group">{renderListado()}</ul>
    </div>
  );
}
