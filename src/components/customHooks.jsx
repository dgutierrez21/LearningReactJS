import { useEffect } from "react";
import { useState } from "react";
import { useFetch } from "./EJcustomHooks/useFetch";

export function CustomHooks() {
  return (
    <>
      {/* <Home /> */}
      <HomeCustomHooks />   
    </>
  );
}

// HOOKS PERSONALIZADOS REACT

// Los ganchos son funciones reutilizables.

// Cuando tiene una lógica de componente que debe ser utilizada por varios componentes, podemos extraer esa lógica a un Hook personalizado.

// Los ganchos personalizados comienzan con "uso". Ejemplo: useFetch.

// construir un gancho
// En el siguiente código, estamos obteniendo datos en nuestro Homecomponente y mostrándolos.

// Usaremos el servicio JSONPlaceholder para obtener datos falsos. Este servicio es excelente para probar aplicaciones cuando no hay datos existentes.

// Para obtener más información, consulte la sección API de obtención de JavaScript .

// Utilice el servicio JSONPlaceholder para obtener elementos "por hacer" falsos y mostrar los títulos en la página:

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
}

// La lógica de obtención también puede ser necesaria en otros componentes, por lo que la extraeremos en un Hook personalizado.

// Mueva la lógica de búsqueda a un nuevo archivo para usar como Hook personalizado:

function HomeCustomHooks() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div className="container">
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
}

// Ejemplo explicado
// Hemos creado un nuevo archivo llamado useFetch.jsque contiene una función llamada useFetchque contiene toda la lógica necesaria para obtener nuestros datos.

// Eliminamos la URL codificada y la reemplazamos con una urlvariable que se puede pasar al Hook personalizado.

// Por último, estamos devolviendo nuestros datos desde nuestro Hook.

// En index.js, estamos importando nuestro useFetchHook y utilizándolo como cualquier otro Hook. Aquí es donde pasamos la URL para obtener datos.

// Ahora podemos reutilizar este gancho personalizado en cualquier componente para obtener datos de cualquier URL.

// https://www.w3schools.com/REACT/react_customhooks.asp