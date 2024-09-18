import React, { useState } from "react";
import "../styles/Hidden.css";

function Hidden() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container-hidden">
      <button className="btn-hidden" onClick={toggleText}>
        {isVisible ? "Ocultar Texto" : "Mostrar Texto"}
      </button>
      <p className={isVisible ? "visible" : "hidden"}>
        Aparezco
      </p>
    </div>
  );
}

export default Hidden;
