import React, { useState } from "react";
import "../styles/Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div class="container">
      <h1>Contador: {count}</h1>
      <div>
        <button onClick={increase}>
          Incrementar
        </button>
        <button onClick={decrease}>Decrementar</button>
      </div>
    </div>
  );
}

export default Counter;
