import logo from "./logo.svg";
import "./App.css";
import Parent from "./Components/Parent";
import Child from "./Components/Child";
import Task from "./Components/Task";
import NavBar from "./Components/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import TaskDetail from "./TaskDetail";
import Rendering from "./Components/Rendering";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="task" element={<Task />} />
        <Route path="task/:taskId" element={<TaskDetail />} />
        <Route path="/" element={<Task />} />
        <Route path="render" element={<Rendering />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
