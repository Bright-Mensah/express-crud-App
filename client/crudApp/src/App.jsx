import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route exact path="/signup" Component={Signup} />
        <Route exact path="/home" Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
