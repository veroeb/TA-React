import React, { useState, useEffect } from "react";
import "../styles/Timer.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-container">
      <h1>Temporizador</h1>
      <p>Segundos: {seconds}</p>
    </div>
  );
}

export default Timer;
