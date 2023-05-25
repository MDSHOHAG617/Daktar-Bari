import { Route, Routes } from "react-router-dom";
import "./App.css";
import Consultations from "./Components/Consultations/Consultations";
import Consultation from "./Components/Consultations/Consultations";
import Enterprise from "./Components/Enterprise/Enterprise";
import HealthPlans from "./Components/HealthPlans/HealthPlans";
import ForDoctors from "./Components/Home/ForDoctors";
import Home from "./Components/Home/Home";
import Login from "./Components/Shared/Login/Login";
import Footer from "./Components/Shared/Navbar/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";
import SignUp from "./Components/Shared/SignUp/SignUp";
import RequireAuth from "./Components/Shared/Auth/RequireAuth";
import DashBoard from "./Components/Dashboard/DashBoard";
import RequireAdmin from "./Components/Shared/Auth/RequireAdmin";
import AddMedicine from "./Components/Dashboard/AddMedicine";
import Purchase from "./Components/Purchase/Purchase";
import Medicine from "./Components/Medicines/Medicine";
import MyOrders from "./Components/Dashboard/MyOrders";
import DoctorRegistration from "./Components/DoctorsRegistration/DoctorsRegistration";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GeneralPhysicians from "./Components/Consultations/GeneralPhysicians";
import Doctors from "./Components/Doctors/Doctors";
import Doctor from "./Components/Doctors/Doctor";
import AllUsers from "./Components/Dashboard/AllUsers";
import Payment from "./Components/Dashboard/Payment";

function App() {
  return (
    <div className="App font-bold  ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="consultation" element={<Consultations />} />
        <Route path="/generalPhysician" element={<GeneralPhysicians />} />
        <Route path="healthPlans" element={<HealthPlans />} />
        <Route path="orderMedicine" element={<Medicine />} />
        <Route path="enterprise" element={<Enterprise />} />
        <Route path="forDoctors" element={<ForDoctors />} />
        <Route path="/doctorsRegistration" element={<DoctorRegistration />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        {/* try */}
        {/* <Route path="doctor" element={<Doctors />} /> */}

        {/* Doctors */}
        <Route path="doctors/category/:category" element={<Doctors />} />
        <Route path="doctor/:id" element={<Doctor />} />
        {/* purchase */}
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />

        {/* dashboard */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          {/* <Route path="payment/:id" element={<Payment></Payment>}></Route> */}
          <Route
            path="addMedicine"
            element={
              <RequireAdmin>
                <AddMedicine />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="allUsers"
            element={
              <RequireAdmin>
                <AllUsers />
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
      <ToastContainer />
    </div>
  );
}
export default App;
