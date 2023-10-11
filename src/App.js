import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/ThemeContext";
import { StateContext } from "./context/StateContext";
import { useContext } from "react";
import "./App.css";
export default function Root() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { state, setEstado } = useContext(StateContext);
  return (
    <>
      <div className={`App ${theme}`}>
        <Navbar />
        <h1>{state}</h1>
        <button onClick={setEstado}>Clique</button>
        <Outlet />
        <button onClick={toggleTheme}>Mudar tema</button>
      </div>
    </>
  );
}
