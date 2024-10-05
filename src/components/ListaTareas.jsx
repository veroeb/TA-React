import React, { useState } from "react";
import "../styles/ListaTareas.css";

function ListaTareas() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTask, setEditingTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleEditInputChange = (e) => {
    setEditingTask(e.target.value);
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

  const editTask = (index) => {
    setEditingIndex(index);
    setEditingTask(taskList[index]);
  };

  const saveEditedTask = () => {
    const updatedTaskList = [...taskList];
    updatedTaskList[editingIndex] = editingTask;
    setTaskList(updatedTaskList);
    setEditingIndex(null);
    setEditingTask("");
  };

  return (
    <div>
      <div className="div-ta">
        <h2 className="titulo-ta">TA 6: List Component</h2>
      </div>
      <div>
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

        <ul>
          {taskList.map((task, index) => (
            <li key={index} className="task-item">
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editingTask}
                    onChange={handleEditInputChange}
                    style={{ padding: "5px", fontSize: "16px", width: "80%" }}
                  />
                  <button className="btn-guardar" onClick={saveEditedTask}>
                    Guardar
                  </button>
                </>
              ) : (
                <>
                  <span>{task}</span>
                  <div className="task-buttons">
                    <button
                      className="btn-editar"
                      onClick={() => editTask(index)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn-eliminar"
                      onClick={() => deleteTask(index)}
                    >
                      Eliminar
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListaTareas;
