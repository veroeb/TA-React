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
import Product from "./components/Product";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <ThemeProvider>
          <UserProvider>
            <Router>
              <div className="App">
                <h1>React Components Example</h1>

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
                    <li>
                      <Link to="/dashboard">Dashboard (Protegido)</Link>
                    </li>
                    <li>
                      <Link to="/product/1">Producto 1</Link>
                    </li>
                    <li>
                      <Link to="/product/2">Producto 2</Link>
                    </li>
                  </ul>
                </nav>

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route
                    path="/dashboard"
                    element={
                      <PrivateRoute>
                        <Dashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route path="/product/:id" element={<Product />} />
                </Routes>

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
            </Router>
          </UserProvider>
        </ThemeProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
