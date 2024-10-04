import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/ThemeComponent.css";

const ThemeComponent = () => {
  const { temaOscuro } = useContext(ThemeContext);

  return (
    <div className={temaOscuro ? "tema-oscuro" : "tema-claro"}>
      <h2 className={temaOscuro ? "titulo-oscuro" : ""}>
        Componente con estilo {temaOscuro ? "oscuro" : "claro"}
      </h2>
      <p>Este componente cambia de estilo según el tema actual</p>
    </div>
  );
};

export default ThemeComponent;
