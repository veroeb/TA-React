import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = useContext(AuthContext); 

  return (
    <div style={{ marginBottom: "20px" }}>
      <h1>Dashboard</h1>
      <p>Esta es una página protegida. Solo los usuarios autenticados pueden verla</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Dashboard;
