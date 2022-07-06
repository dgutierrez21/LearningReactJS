import { DataProvider } from "./Context/dataContext";
import { BotonCambiarData } from "./EJcontext/botonCambiarData";
import { Pagina1 } from "./EJcontext/pagina1";
import { Pagina2 } from "./EJcontext/pagina2";

// El API de contexto nos permite compartir valores y funcionalidades a través del árbol de componentes sin necesidad de usar props.

// https://guias.makeitreal.camp/react/context

export function Context() {

  return (
    <DataProvider>
      <div className="container-fluid">
        <Pagina1 />
        <Pagina2 />
        {/* <BotonCambiarData /> */}
      </div>
    </DataProvider>
  );
}

// https://youtu.be/UPCOJgLlr3w