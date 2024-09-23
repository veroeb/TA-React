import React, { useState } from "react";
import "../styles/ListaTareas.css";

function ListaTareas() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim()) {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Agregar nueva tarea"
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button className="btn-lista" onClick={addTask} >
        Agregar
      </button>

      <ul style={{ marginTop: "20px" }}>
        {taskList.map((task, index) => (
          <li key={index} style={{ listStyleType: "none", marginBottom: "10px" }}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
