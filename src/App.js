import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import MyCalendar from "./Pages/MyCalendar/MyCalendar";
import Login from "./Pages/Login/Login/Login";
import ToDo from "./Pages/Home/ToDo/ToDo";
import Register from "./Pages/Login/Register/Register";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import CompleteTask from "./Pages/CompleteTask/CompleteTask";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/to-do"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        ></Route>
        <Route path="/completed/:completedId" element={<CompleteTask />}></Route>
        <Route path="/calendar" element={<MyCalendar />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
