import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserInput = () => {
  const { setUsername } = useContext(UserContext);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div style={{ marginTop: "50px"}}>
      <input 
        type="text" 
        onChange={handleChange} 
        placeholder="Escribe tu nombre..." 
        style={{ padding: "10px", fontSize: "16px" }}
      />
    </div>
  );
};

export default UserInput;
