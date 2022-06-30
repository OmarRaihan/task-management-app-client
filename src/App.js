import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import MyCalendar from "./Pages/MyCalendar/MyCalendar";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="calendar" element={<MyCalendar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
