import React from "react";
import "./App.css";
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
import { LanguageProvider } from "./context/LanguageContext";
import LanguageDisplay from "./components/LanguageDisplay";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";

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
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </Router>
        </UserProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
