import { useContext } from "react";
import { DataContext } from "../Context/dataContext";

export function Pagina1() {
    const {data} = useContext(DataContext)
  return (
    <div>
      <h1>Pagina 1</h1>
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
