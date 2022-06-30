import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import MyCalendar from "./Pages/MyCalendar/MyCalendar";
import Login from "./Pages/Login/Login/Login";
import ToDo from "./Pages/Home/ToDo/ToDo";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ToDo />}></Route>
        <Route path="/to-do" element={<ToDo />}></Route>
        <Route path="/calendar" element={<MyCalendar />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
