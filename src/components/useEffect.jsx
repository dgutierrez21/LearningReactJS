import { useState, useEffect } from "react";

// EJEMPLO 1

export function UseEffect() {
  const [contador, setContador] = useState(0);

  function sumar() {
    setContador(contador + 1);
  }

  // La llamada a useEffect acepta una función como argumento. Esta función se ejecuta por defecto cuando el componente se renderiza por primera vez, y después cada vez que el componente se actualice

  // El hooks useEffect permite realizar efectos secundarios en sus componentes.
  // Algunos ejemplos de efectos secundarios son: obtención de datos, actualización directa del DOM y temporizadores.

  // useEffectacepta dos argumentos. El segundo argumento es opcional.

  // useEffect(<function>, <dependency>)

  useEffect(() => {
    console.log(`La cuenta es ${contador}`);
    document.title = `La cuenta es ${contador}`;
  });
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Hola Mundo</h1>
        <h2>{contador}</h2>
        <button onClick={sumar}>S U M A R</button>
      </div>
    </>
  );
}

// EJEMPLO 2

export function Cuadrado() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <>
      <button style={{ margin: "50px" }} onClick={() => setMostrar(false)}>
        M O S T R A R / O C U L T A R
      </button>
      {mostrar ? <MouseColor /> : null}
    </>
  );
}

function MouseColor() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    function OnMouseMove(event) {
      if (event.clientX < window.innerWidth / 2) {
        setColor("red");
      } else {
        setColor("blue");
      }
    }

    window.addEventListener("mousemove", OnMouseMove);
    console.log("EJECUTANDO");

    return () => {
      console.log("LIMPIANDO");
      window.removeEventListener("mousemove", OnMouseMove);
    };
    // En este caso añadimos un array de dependencias vacias porque solo queremos colocar el addEventListener una vez, solo cuando el elemento se monta,
    // caso contrario en el evento pasado cuando actualizamos la cuenta en el titulo en ese caso si queriamos que useEffect siempre se ejecutara, entonces esto depende de cada caso de uso
  }, []);

  console.log("Ocurrio el Render");

  return (
    <div style={{ height: "50vh", with: "50vh", backgroundColor: color }}></div>
  );
}

// EJEMPLO 3

export function Timer() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setContador((contador) => contador + 1);
    }, 1000);
  });

  return <h1>He renderizado {contador} veces</h1>;
}

// EJEMPLO 4

export function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const userData = {
          name: data.results[0].name.first,
          email: data.results[0].email,
          picture: data.results[0].picture.thumbnail,
        };
        setUser(userData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center mt-4 me-3">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        <div className="col-lg-4">
          <div className="text-center card-box">
            <div className="member-card pt-2 pb-2">
              <div className="thumb-lg member-thumb mx-auto">
                <img
                  src={user.picture}
                  className="rounded-circle img-thumbnail"
                />
              </div>
              <div className="">
                <h4>{user.name}</h4>
                <p className="text-muted">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
