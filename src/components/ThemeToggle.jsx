import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/ThemeComponent.css";

const ThemeToggle = () => {
  const { temaOscuro, toggleTema } = useContext(ThemeContext);

  return (
    <button onClick={toggleTema}>
      Cambiar a tema {temaOscuro ? "claro" : "oscuro"}
    </button>
  );
};

export default ThemeToggle;
