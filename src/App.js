import React from "react";
import CardsView from "./views/CardsView";
import InputView from "./views/InputView";
import Counter from "./components/Counter";
import Hidden from "./components/Hidden";
import ListaTareas from "./components/ListaTareas";
import APICall from "./components/APICall";
import Timer from "./components/Timer";
import { UserProvider } from "./context/UserContext";
import UserView from "./components/UserView";
import UserInput from "./components/UserInput";
import ThemeComponent from "./components/ThemeComponent";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageDisplay from "./components/LanguageDisplay";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <UserProvider>
          <div className="App">
            <h1>React Components Example</h1>

            <CardsView />

            <InputView />

            <Counter />

            <Hidden />

            <ListaTareas />

            <APICall />

            <Timer />

            <UserInput />
            <UserView />

            <ThemeToggle />
            <ThemeComponent />

            <LanguageDisplay />
          </div>
        </UserProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
