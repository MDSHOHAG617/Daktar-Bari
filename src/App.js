import { Route, Routes } from "react-router-dom";
import "./App.css";
import Consultations from "./Components/Consultations/Consultations";
import Consultation from "./Components/Consultations/Consultations";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Navbar/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App font-bold ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="consultation" element={<Consultations />} />
        <Route path="healthPlans" element="" />
      </Routes>
      <Footer></Footer>
    </div>
  );
}
export default App;
