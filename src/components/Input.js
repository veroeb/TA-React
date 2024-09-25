import React, { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Escribe algo..." 
      />
      <p>Escribiste: {inputValue}</p>
    </div>
  );
};

export default Input;
