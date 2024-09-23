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

  const deleteTask = (indexToDelete) => {
    const updatedTaskList = taskList.filter(
      (_, index) => index !== indexToDelete
    );
    setTaskList(updatedTaskList);
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
      <button className="btn-lista" onClick={addTask}>
        Agregar
      </button>

      <ul
        style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}
      >
        {taskList.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button className="btn-eliminar" onClick={() => deleteTask(index)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
