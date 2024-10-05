import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/ThemeComponent.css";

const ThemeToggle = () => {
  const { temaOscuro, toggleTema } = useContext(ThemeContext);

  return (
    <div>
      <div className="div-ta">
        <h2 className="titulo-ta">TA 14: Theme Toggle</h2>
      </div>
      <button onClick={toggleTema} style={{ marginTop: "20px" }}>
        Cambiar a tema {temaOscuro ? "claro" : "oscuro"}
      </button>
    </div>
  );
};

export default ThemeToggle;
