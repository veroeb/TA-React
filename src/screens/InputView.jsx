import React from "react";
import Input from "../components/Input";
import "../styles/InputView.css";

const InputView = () => {
  return (
    <div>
      <div className="div-ta">
        <h2 className="titulo-ta">TA 3: Input Component</h2>
      </div>

      <div className="input-view">
        <Input />
      </div>
    </div>
  );
};

export default InputView;
