// https://youtu.be/8KuVE5JN8JQ

// IMPORTANTE #F00

// Soluciones completas
// Si lo que estás buscando es una solución completa incluyendo validación,
//  tener en cuenta los campos visitados y manejar el envío del formulario,
//  Formik es una de las opciones populares. Sin embargo, está construido con
//  los mismos principios de los componentes controlados y manejo de estado,
//  así que no los dejes de aprender.

// La expresión "...datos" lo que está haciendo es poner los atributos del objeto (nombre y apellido) uno a uno en otro objeto, y estos mismos atributos los reemplaza haciendo "[event.target.name] : event.target.value" tras cualquier cambio de los campos de textos.
// Si ustedes hacen un "console.log" de cada una de esas expresiones se van a dar cuenta lo que estan haciendo. Ejemplo: "console.log(event.target.name)" y console.log(event.target.value)

import { useState } from "react";

export function Forms() {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  const handleInputChange = (evento) => {
    setDatos({
      ...datos,
      [evento.target.name]: evento.target.value,
    });
  };

  const enviarDatos = (evento) => {
    evento.preventDefault();
    alert(
      `Hola ${datos.nombre} ${datos.apellido}, los datos han sido enviados exitosamente.`
    );
  };

  return (
    <div className="container mt-5">
      <h1>Formulario</h1>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-4">
          <input
            className="form-control"
            type="text"
            placeholder="Ingrese su nombre"
            name="nombre"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <input
            className="form-control"
            type="text"
            placeholder="Ingrese su apellido"
            name="apellido"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-1">
          <button className="btn btn-primary mt-3 m-md-0" type="submit">
            Enviar
          </button>
        </div>
      </form>
      <h2 className="mt-5">
        Su nombre completo es: {datos.nombre} {datos.apellido}
      </h2>
    </div>
  );
}

// IMPORTANTE #F00

// Soluciones completas
// Si lo que estás buscando es una solución completa incluyendo validación,
//  tener en cuenta los campos visitados y manejar el envío del formulario,
//  Formik es una de las opciones populares. Sin embargo, está construido con
//  los mismos principios de los componentes controlados y manejo de estado,
//  así que no los dejes de aprender.
