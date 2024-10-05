import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserInput = () => {
  const { setUsername } = useContext(UserContext);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <div className="div-ta">
        <h2 className="titulo-ta">TA 12: User Input</h2>
      </div>
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Escribe tu nombre..."
          style={{ padding: "10px", fontSize: "16px" }}
        />
      </div>
    </div>
  );
};

export default UserInput;
