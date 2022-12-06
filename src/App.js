import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App font-bold ">
      <Navbar></Navbar>
      <Home></Home>
      <Routes>
        <Route path="/" Element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}
export default App;
