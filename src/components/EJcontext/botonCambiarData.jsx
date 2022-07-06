import { useContext } from "react";
import { DataContext } from "../Context/dataContext";

const dataFixedChange = {
  nombre: "Samuel",
  edad: 33,
};

export function BotonCambiarData() {
    const {setData} = useContext(DataContext)
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => setData(dataFixedChange)}
      >
        Cambiar Datos
      </button>
    </div>
  );
}
