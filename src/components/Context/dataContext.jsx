import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext();

const dataFixed = {
  nombre: "Francisco",
  edad: 25,
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(dataFixed);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
