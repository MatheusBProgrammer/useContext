import { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, setState] = useState("Estado 1");

  const setEstado = () => {
    setState(state === "Estado 1" ? "Estado 2" : "Estado 1");
  };

  return (
    <StateContext.Provider value={{ state, setEstado }}>
      {children}
    </StateContext.Provider>
  );
};
