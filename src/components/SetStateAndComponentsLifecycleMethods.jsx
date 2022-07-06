// https://www.upgrad.com/blog/react-component-lifecycle/

// https://www.youtube.com/watch?v=9pLDT6maok0 

import React from "react";

// En React, la aplicación se divide en las piezas más pequeñas posibles conocidas como Componentes. Los componentes pueden ser de presentación o contenedores.

// Cuando hablamos de componentes de presentación, no tienen lógica. Están incrustados dentro de los componentes; solo tiene la interfaz de usuario.

// Los componentes de contenedor son los que usan componentes de presentación y tienen lógica comercial en el componente. Dichos componentes a menudo tienen que mantener objetos de estado local para lograr uno de los muchos casos de uso de los que podrían ser responsables. Estos componentes utilizan componentes de presentación como componentes secundarios y transmiten datos mediante el uso de varios accesorios.

// React le permite tener componentes de clase o funcionales. Un patrón predominante utilizado en el ecosistema de reacción es que el componente de presentación es un tipo funcional de componente y los componentes de contenedor son de tipo clase.

// El  ciclo de vida de reacción  muestra el proceso exacto por el que pasan los componentes y la razón detrás del  ciclo de vida del componente de reacción .

// Componentes funcionales #ff0
// Estos son los que no tienen estado, y solo se realizan manipulaciones con los accesorios.

// Todos los métodos del ciclo de vida de los componentes o  setState  no se pueden usar ni acceder dentro de dichos componentes.

// Componentes de clase #ff0
// Estos componentes pueden tener un estado local y tienen acceso a métodos de ciclo de vida y  setState .

// Un componente de clase típico en reaccionar se parece a: -

export class SetStateAndComponentsLifecycleMethods extends React.Component {
  render() {
    return <h1>Hola mundo 000</h1>;
  }
}

// El ciclo de vida del componente tiene tres fases:-

// Montaje
// Actualizando
// Desmontar

// Montaje
// Cuando cualquier componente se crea e inserta en DOM (Document Object Model), los métodos utilizados son:

// ●      constructor()

// ●      static getDerivedStateFromProps()

// ●      render()

// ●      componentDidMount()

// Actualizando
// Cuando se cambia la propiedad o el estado proporcionado a un componente, la nueva representación del componente también se conoce como la fase de actualización. En esta fase, a continuación se encuentran los siguientes métodos de ciclo de vida que se llaman:

// ● static getDerivedStateFromProps()

// ● shouldComponentUpdate()

// ● render()

// ● getSnapshotBeforeUpdate()

// ● componentDidUpdate()

// Desmontar
// Este método se llama durante el desmontaje de cualquier componente: -

// ● component willUnmount()

// Es la última función que se invoca antes de que se destruya el modelo de objeto del documento. Funciona como la limpieza de cualquier elemento construido durante componentWillMount.

//  constructor (accesorios)

// Este método de ciclo de vida se utiliza durante la fase de montaje de los componentes. Uno puede tener un objeto de estado local declarado aquí. El super(props) se llama dentro del constructor antes que cualquier otra declaración; de lo contrario, se produce un error al acceder a this.props.

// Si uno no tiene como objetivo declarar el objeto de estado local o vincular el controlador de eventos a la instancia, no hay necesidad de escribir el método de ciclo de vida de los componentes.

// No se recomienda el estado de llamada en el constructor (), ya que desencadenaría una nueva representación antes de que finalice el ciclo anterior.

// Constructor() es el único lugar donde uno puede asignar directamente el estado. De lo contrario, si es necesario cambiar el estado o asignar algo dentro de él,  se debe usar this.setSate  .

// render();

// El método render() de cualquier componente principal puede tener componentes secundarios en su interior. Todo siguiendo el patrón de composición, que es la base de los componentes de reacción.

// Cada vez que se llama al método de procesamiento principal, el procesamiento también se inicia para los componentes secundarios, y el procesamiento principal se completa solo después de que se complete todo el procesamiento secundario.

// El método de renderizado es un método requerido; sin esto, el componente no se puede hacer ya que este es el único lugar donde se puede escribir la parte de la vista de un componente.

// El método de renderizado es puro; esto significa que no puede modificar el estado dentro de él.

// Para cualquier componente en la fase de actualización, la nueva representación de un componente en particular ocurrirá o no puede depender del  tipo de devolución del método de ciclo de vida shouldComponentUpdate()  o del uso.

// No se recomienda tener llamadas API y cualquier interacción con el navegador dentro de este método, y arrojará un error.

// ● componentDidMount()

// Este método se invoca inmediatamente después de montar el componente. Ahora DOM está disponible para más manipulaciones. Uno puede llamar a  setState  dentro de este método.

// Además, la interacción con el navegador o las llamadas a la API se pueden realizar desde aquí.

// Este método solo se llama una vez, que es durante el tiempo de creación. El método no se ejecutará en ninguna otra parte de renderizado posterior, y la lógica interna tampoco se ejecutará.

// ● componentDidUpdate()

// Esto es lo mismo que el componenteDidMount.; uno puede obtener un error con la única diferencia de que esto solo se llama cuando ocurre la re-renderización de un componente. Este método no se llama para el renderizado inicial.

// El setState y los efectos secundarios se pueden realizar dentro de este método. Pero setState necesita estar envuelto en una condición; de lo contrario, uno podría terminar en el bucle infinito de renderizado, y el renderizado nunca terminaría.

// Además, no se llamará a componentDidUpdate si shouldComponentUpdate() devuelve falso.

// ● componentWillUnmount()

// Este método se llama cuando la fase de desmontaje de un componente está en curso.

// Dentro del método, idealmente, se puede lograr la eliminación de los controladores de eventos y la limpieza de la memoria.

// La función setState() no debe llamarse dentro de esto, ya que hace que se vuelva a renderizar un componente.

// ● shouldComponentUpdate()

// Al desarrollar aplicaciones de reacción, a menudo hay casos en los que uno tiene que evitar la repetición innecesaria de componentes. Para lograr este componente en clase, se tiene el método mencionado anteriormente. Si este método devuelve falso, no se volverá a procesar el componente y sus componentes secundarios.

// Los accesorios anteriores se pueden verificar y comparar con los accesorios nuevos proporcionados para garantizar que no haya cambios y luego devolver falso.

// No se recomienda llamar al método setState() dentro de esto, ya que de nuevo, causaría una nueva representación.

// Además, los efectos secundarios no deben llevarse a cabo dentro de este método.

// También hay otra alternativa a este método. Uno puede usar React.pureComponents mientras extiende la clase. Esto es mucho más estable y confiable que shouldComponentUpdate().

// Por último, pero no menos importante, existen límites de error del tipo de componentes de reacción que están presentes para detectar los errores.

// Uno tiene que envolver el componente con el componente de límite de error simplemente.

// Dentro de este componente especial, se utilizan dos métodos de ciclo de vida:-

// static getDerivedStateFromError()
// componentDidCatch()

// Ambos son llamados si algún componente descendiente arroja un error.

// El primero se llama durante la fase de renderizado, por lo que no se permiten efectos secundarios en su interior. El segundo se llama durante la fase de confirmación, por lo que se permiten efectos secundarios dentro de él.

// Conclusión
// El ciclo de  vida del componente de reacción  agrega complejidad al código, pero la ejecución y manipulación sistemáticas realizadas a través de los métodos parecen bastante atractivas desde la perspectiva del desarrollador. El ciclo de vida de React  permite reestructurar o manipular los componentes.
