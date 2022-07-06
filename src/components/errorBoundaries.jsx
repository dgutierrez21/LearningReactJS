// Límites de errores
// En el pasado, los errores de JavaScript dentro de los componentes solían corromper el estado interno de React y hacían que emitiera errores crípticos en siguientes renderizados. 
// Estos errores siempre eran causados por un error previo en el código de aplicación, pero React no proveía una manera de gestionarlos elegantemente en componentes, 
// y no podía recuperarse de ellos.

// Introduciendo Límites de Errores
// Un error de JavaScript en una parte de la interfaz no debería romper toda la aplicación. Para resolver este problema, React 16 introduce el nuevo concepto de “límite de errores”.

// Los límites de errores son componentes de React que capturan errores de JavaScript en cualquier parte de su árbol de componentes hijo, registran esos errores, y muestran una interfaz de repuesto en lugar del árbol de componentes que ha fallado. Los límites de errores capturan errores durante el renderizado, en métodos del ciclo de vida, y en constructores de todo el árbol bajo ellos.

// Nota

// Los límites de errores no capturan errores de:

// Manejadores de eventos (aprende más)
// Código asíncrono (p.ej. callbacks de setTimeout o requestAnimationFrame)
// Renderizado en el servidor
// Errores lanzados en el propio límite de errores (en lugar de en sus hijos)

// https://youtu.be/AkFrnjI3jv0 