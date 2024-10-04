import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/LanguageDisplay.css";

function LanguageDisplay() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
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
