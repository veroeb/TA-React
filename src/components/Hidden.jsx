import React, { useState } from "react";
import "../styles/Hidden.css";

function Hidden() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="div-ta">
        <h2 className="titulo-ta">TA 5: Hidden Component</h2>
      </div>
      <div className="container-hidden">
        <button className="btn-hidden" onClick={toggleText}>
          {isVisible ? "Ocultar Texto" : "Mostrar Texto"}
        </button>
        <p className={isVisible ? "visible" : "hidden"}>Aparezco</p>
      </div>
    </div>
  );
}

export default Hidden;
