import React, { useState, useEffect } from "react";
import "../styles/Timer.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="div-ta">
        <h2 className="titulo-ta">TA 11: Timer</h2>
      </div>
      <div className="timer-container">
        <h1>Temporizador</h1>
        <p>Segundos: {seconds}</p>
      </div>
    </div>
  );
};

export default Timer;
