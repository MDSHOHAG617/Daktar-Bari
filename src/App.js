import { Route, Routes } from "react-router-dom";
import "./App.css";
import Consultations from "./Components/Consultations/Consultations";
import Consultation from "./Components/Consultations/Consultations";
import Enterprise from "./Components/Enterprise/Enterprise";
import HealthPlans from "./Components/HealthPlans/HealthPlans";
import ForDoctors from "./Components/Home/ForDoctors";
import Home from "./Components/Home/Home";
import OrderMedicine from "./Components/OrderMedicine/OrderMedicine";
import Login from "./Components/Shared/Login/Login";
import Footer from "./Components/Shared/Navbar/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";
import SignUp from "./Components/Shared/SignUp/SignUp";
import RequireAuth from "./Components/Shared/Auth/RequireAuth";
import DashBoard from "./Components/Dashboard/DashBoard";
import RequireAdmin from "./Components/Shared/Auth/RequireAdmin";
import AddMedicine from "./Components/Dashboard/AddMedicine";

function App() {
  return (
    <div className="App font-bold  ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="consultation" element={<Consultations />} />
        <Route path="healthPlans" element={<HealthPlans />} />
        <Route path="orderMedicine" element={<OrderMedicine />} />
        <Route path="enterprise" element={<Enterprise />} />
        <Route path="forDoctors" element={<ForDoctors />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="login" element={<Login />} />

        {/* dashboard */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          {/* <Route index element={<MyOrders></MyOrders>}></Route> */}
          {/* <Route path="payment/:id" element={<Payment></Payment>}></Route> */}
          <Route
            path="addMedicine"
            element={
              <RequireAdmin>
                <AddMedicine />
              </RequireAdmin>
            }
          ></Route>
          {/* <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route> */}
          {/* <Route
            path="allCustomers"
            element={
              <RequireAdmin>
                <AllCustomers></AllCustomers>
              </RequireAdmin>
            }
          ></Route> */}
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}
export default App;
