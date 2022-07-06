export function CompositionVSInheritance() {
  return (
    <>
      <DialogoBienvenida />
      <PanelDividido left={<Contactos />} right={<Chat />} />
      <DialogoBienvenida02 />
    </>
  );
}

// Composición vs. herencia
// React tiene un potente modelo de composición, y recomendamos usar composición en lugar de herencia para reutilizar código entre componentes.

// Contención
// Algunos componentes no conocen sus hijos de antemano. Esto es especialmente común para componentes como Sidebar o Dialog que representan “cajas” genéricas.

// Recomendamos que estos componentes usen la prop especial children para pasar elementos hijos directamente en su resultado:

function BordeFantasia(props) {
  return (
    <div className={"bordeFantasia bordeFantasia-" + props.color}>
      {props.children}
    </div>
  );
}

// Esto permite que otros componentes les pasen hijos arbitrarios anidando el JSX:

function DialogoBienvenida() {
  return (
    <BordeFantasia color="blue">
      <h1>Bienvenida</h1>
      <p> Gracias por visitar nuestra nave espacial.</p>
    </BordeFantasia>
  );
}

// Cualquier cosa dentro de la etiqueta JSX <BordeFantasia> se pasa dentro del componente BordeFantasia como la prop children.
// Como BordeFantasia renderiza {props.children} dentro de un <div>, los elementos que se le han pasado aparecen en el resultado final.

// Aunque es menos común, a veces puedes necesitar múltiples “agujeros” en un componente. En estos casos puedes inventarte tu propia convención en lugar de usar children:

function PanelDividido(props) {
  return (
    <div className="panelDividido d-flex justify-content-center gap-5">
      <div className="panelDividido-left">{props.left}</div>
      <div className="panelDividido-right">{props.right}</div>
    </div>
  );
}

function Contactos() {
  return <h2>Mis Contactos</h2>;
}

function Chat() {
  return <h2>Mi Chat</h2>;
}

// Los elementos como <Contacts /> y <Chat /> son simplemente objetos, por lo que puedes pasarlos como props como cualquier otro dato.
// Este enfoque puede recordarte a “huecos” (slots) en otras bibliotecas, pero no hay limitaciones en lo que puedes pasar como props en React.

// Especialización
// A veces pensamos en componentes como “casos concretos” de otros componentes. Por ejemplo, podríamos decir que un WelcomeDialog es un caso concreto de Dialog.

// En React, esto también se consigue por composición, en la que un componente más “específico” renderiza uno más “genérico” y lo configura con props:

function BordeFantasia02(props) {
  return (
    <div className={"bordeFantasia bordeFantasia-" + props.color}>
      {props.children}
    </div>
  );
}

function Dialogo(props) {
  return (
    <BordeFantasia02 color="red">
      <h1>{props.titulo}</h1>
      <p>{props.mensaje}</p>
    </BordeFantasia02>
  );
}

function DialogoBienvenida02() {
  return (
    <Dialogo
      titulo="Bienvenido a nuestra tienda"
      mensaje="Gracias por visitar nuestra pagina."
    />
  );
}

// La composición funciona igual de bien para componentes definidos como clases:

// ¿Entonces qué pasa con la herencia?
// En Facebook usamos React en miles de componentes, y no hemos hallado ningún caso de uso en el que recomendaríamos crear jerarquías de herencia de componentes.

// Las props y la composición te dan toda la flexibilidad que necesitas para personalizar el aspecto y el comportamiento de un componente de forma explícita y segura. Recuerda que los componentes pueden aceptar props arbitrarias, incluyendo valores primitivos, elementos de React y funciones.

// Si quieres reutilizar funcionalidad que no es de interfaz entre componentes, sugerimos que la extraigas en un módulo de JavaScript independiente. Los componentes pueden importarlo y usar esa función, objeto, o clase, sin extenderla.