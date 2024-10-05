import React, { useState, useEffect } from "react";
import "../styles/APICall.css";

function APICall() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div className="div-ta">
        <h2 className="titulo-ta">TA 10: API Call</h2>
      </div>
      <div className="users-container">
        <h1>Lista de Usuarios</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <strong>Nombre:</strong> {user.name} <br />
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default APICall;
