import React from "react";
import CardsView from "./views/CardsView";
import InputView from "./views/InputView";
import Counter from "./components/Counter";
import Hidden from "./components/Hidden";
import ListaTareas from "./components/ListaTareas";
import APICall from "./components/APICall";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Components Example</h1>

      <CardsView />

      <InputView />

      <Counter />

      <Hidden />

      <ListaTareas />

      <APICall />

      <Timer />
    </div>
  );
}

export default App;
