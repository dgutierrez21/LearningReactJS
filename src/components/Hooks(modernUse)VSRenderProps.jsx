
// Render Props: un patrón de react avanzado #ff0

// https://youtu.be/98eEGDVNEqk

// El término “render prop” se refiere a una técnica para compartir código entre componentes en React utilizando una propiedad cuyo valor es una función. 
// Un componente con una render prop toma una función que devuelve un elemento de React y lo llama en lugar de implementar su propia lógica de representación.


// Hooks ( modern use ) VS Render Props #f00

//  las render props no provocan que se rerenderice ningún componente a no ser que este modifique algún estado global o estado compartido con otros componentes de la misma vista. 
// En los proyecto no suelo usarlo mucho, ni he visto que se use mucho, salvo para cosas muy concretas,  por normal general vas a querer usar custom hooks o un context en lugar de render props, 
// ya que son más fáciles de testear, controlar y no genera tanto js "sucio" en el jsx.

// https://youtu.be/4iTPz_djYZg

// https://blog.logrocket.com/react-render-props-vs-custom-hooks/

