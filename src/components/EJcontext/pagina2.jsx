import { useContext } from "react";
import { DataContext } from "../Context/dataContext";
import { BotonCambiarData } from "./botonCambiarData";

export function Pagina2() {

    const {data} = useContext(DataContext)
  return (
    <div>
      <h1>Pagina 2</h1>
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <BotonCambiarData/>
    </div>
  );
}
