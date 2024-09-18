import React, { useState } from "react";
import "../styles/Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div className="container">
      <h1>Contador: {count}</h1>
      <div>
        <button className="counter" onClick={increase}>
          Incrementar
        </button>
        <button className="counter" onClick={decrease}>Decrementar</button>
      </div>
    </div>
  );
}

export default Counter;
