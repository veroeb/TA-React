import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [temaOscuro, setTemaOscuro] = useState(false);

  const toggleTema = () => {
    setTemaOscuro((prevTemaOscuro) => !prevTemaOscuro);
  };

  return (
    <ThemeContext.Provider value={{ temaOscuro, toggleTema }}>
      {children}
    </ThemeContext.Provider>
  );
};
