import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { login, isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>Bienvenido a la página de inicio de nuestra aplicación</p>
      {!isAuthenticated ? (
        <button onClick={login}>Iniciar sesión</button>
      ) : (
        <p>
          Ya estás autenticado. Ve al <Link to="/dashboard">Dashboard</Link>
        </p>
      )}
    </div>
  );
};

export default Home;
