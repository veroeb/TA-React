import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/LanguageDisplay.css";

function LanguageDisplay() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <div className="div-ta">
        <h2 className="titulo-ta">TA 15: Language Toggle</h2>
      </div>
      <h2>Idioma Actual: {language === "es" ? "Español" : "Inglés"}</h2>
      <button className="language" onClick={() => setLanguage("es")}>
        Español
      </button>
      <button className="language" onClick={() => setLanguage("en")}>
        Inglés
      </button>
    </div>
  );
}

export default LanguageDisplay;
