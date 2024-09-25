import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserView = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <h2>Hola, {username}!</h2>
    </div>
  );
};

export default UserView;
