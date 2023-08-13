import { Route, Routes } from "react-router-dom";
import "./App.css";
import Consultations from "./Components/Consultations/Consultations";
import Consultation from "./Components/Consultations/Consultations";
import Enterprise from "./Components/Enterprise/Enterprise";
import HealthPlans from "./Components/HealthPlans/HealthPlans";
import ForDoctors from "./Components/Home/ForDoctors";
import Home from "./Components/Home/Home";
import Login from "./Components/Shared/Login/Login";
import Footer from "./Components/Shared/Footer/Footer.js";
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
import Doctors from "./Components/Doctors/Doctors";
import Doctor from "./Components/Doctors/Doctor";
import AllUsers from "./Components/Dashboard/AllUsers";
import Payment from "./Components/Dashboard/Payment";
import ConsultationPayment from "./Components/Consultations/ConsultationPayment";
import Prescription from "./Components/Prescription/Prescription.js";
import Booking from "./Components/Consultations/Booking Appointments/Booking";
import MyAppointments from "./Components/Dashboard/MyAppointments";
import BookingPayments from "./Components/Consultations/Booking Appointments/BookingPayments";
import Subscription from "./Components/HealthPlans/Subscription/Subscription";
import MySubscription from "./Components/Dashboard/MySubscription";
import SubscriptionPayments from "./Components/HealthPlans/Subscription/SubscriptionPayments";
import ManageMedicine from "./Components/Dashboard/ManageMedecine";
import AddPrescription from "./Components/Dashboard/AddPrescription";
import MyPrescription from "./Components/Dashboard/MyPrescription";
import MyProfile from "./Components/Dashboard/MyProfile";
import RequireDoctor from "./Components/Shared/Auth/RequireDoctor";

function App() {
  return (
    <div className="App font-bold  ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="consultation" element={<Consultations />} />
        <Route path="healthPlans" element={<HealthPlans />} />
        <Route path="orderMedicine" element={<Medicine />} />
        <Route path="enterprise" element={<Enterprise />} />
        <Route path="forDoctors" element={<ForDoctors />} />
        <Route path="/doctorsRegistration" element={<DoctorRegistration />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="prescription/:id" element={<Prescription />} />
        {/* try */}
        {/* <Route path="doctor" element={<Doctors />} /> */}

        {/* Doctors */}
        <Route path="doctors/category/:category" element={<Doctors />} />
        <Route path="doctor/:id" element={<Doctor />} />
        <Route
          path="consultationPayment/:id"
          element={<ConsultationPayment />}
        />
        {/* purchase */}
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        {/* Booking */}
        <Route
          path="/booking/:id"
          element={
            <RequireAuth>
              <Booking />
            </RequireAuth>
          }
        />
        {/* Subscribe */}
        <Route
          path="/Subscribe/:id"
          element={
            <RequireAuth>
              <Subscription />
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
          <Route index element={<MyProfile />}></Route>
          <Route path="myOrders" element={<MyOrders />}></Route>
          <Route path="myAppointments" element={<MyAppointments />}></Route>
          <Route path="mySubscription" element={<MySubscription />}></Route>
          <Route path="myPrescription" element={<MyPrescription />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route
            path="BookingPayments/:id"
            element={<BookingPayments />}
          ></Route>
          <Route
            path="subscriptionsPayments/:id"
            element={<SubscriptionPayments />}
          ></Route>
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
            path="addPrescription"
            element={
              <RequireDoctor>
                <AddPrescription />
              </RequireDoctor>
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
          <Route
            path="ManageMedicine"
            element={
              <RequireAdmin>
                <ManageMedicine></ManageMedicine>
              </RequireAdmin>
            }
          ></Route>
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
