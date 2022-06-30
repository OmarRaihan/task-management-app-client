import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
