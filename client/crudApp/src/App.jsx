import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";
import edit from "./Components/edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route exact path="/signup" Component={Signup} />
        <Route exact path="/home" Component={Home} />
        <Route exact path="/addTask" Component={AddTask} />
        <Route exact path="/tasks" Component={Tasks} />
        <Route exact path="/task/:id" Component={edit} />
      </Routes>
    </div>
  );
}

export default App;
