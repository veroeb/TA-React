import React, { useState, useEffect } from "react";
import "../styles/Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div>
      <div className="div-ta">
        <h2 className="titulo-ta">TA 4: Counter Component</h2>
      </div>

      <div className="counter-container">
        <h1>Contador: {count}</h1>
        <div>
          <button className="counter" onClick={increase}>
            Incrementar
          </button>
          <button className="counter" onClick={decrease}>
            Decrementar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
