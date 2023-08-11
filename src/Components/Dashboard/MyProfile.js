import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { Link, Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { TiShoppingCart } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { SiFirebase } from "react-icons/si";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { BsPrescription } from "react-icons/bs";
import { MdCreate } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  const [subscriptions, setSubscription] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [orders, setOrders] = useState([]);
  console.log(user);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?customerEmail=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          //   console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            Navigate("/");
          }
          return res.json();
        })
        .then((data) => setOrders(data));
    }
    //   my Appoinments

    if (user) {
      fetch(`http://localhost:5000/booking?customerEmail=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          //   console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
          }
          return res.json();
        })
        .then((data) => setAppointments(data));
    }
    //   my subscriptions
    if (user) {
      fetch(`http://localhost:5000/subscriptions?customerEmail=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          //   console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
          }
          return res.json();
        })
        .then((data) => setSubscription(data));
    }
    //   my prescriptions
    if (user) {
      fetch(`http://localhost:5000/prescription?customerEmail=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          //   console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
          }
          return res.json();
        })
        .then((data) => setPrescriptions(data));
    }
  }, [user]);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 lg:grid-cols-3 mx-16 gap-4 height-full">
        <Link className="bg-primary p-4 text-white lg:text-xl font-normal rounded-md">
          <CgProfile className="mx-auto text-4xl lg:text-7xl" />
          {user.displayName}{" "}
        </Link>
        <Link className="bg-primary p-4 text-white lg:text-xl font-normal rounded-md break-words ">
          <HiOutlineMail className="mx-auto text-4xl lg:text-7xl" />
          {user.email}{" "}
        </Link>
        <Link className="bg-primary p-4 text-white lg:text-xl font-normal rounded-md">
          <SiFirebase className="mx-auto text-4xl lg:text-7xl" />
          ProviderId : {user.providerId}{" "}
        </Link>
        <Link
          to="/dashboard/myOrders"
          className="bg-primary p-4 text-white lg:text-xl font-normal rounded-md"
        >
          <TiShoppingCart className="mx-auto text-4xl lg:text-7xl" />
          My Orders : {orders.length}{" "}
        </Link>
        <Link
          to="/dashboard/myAppointments"
          className="bg-primary p-4 text-white lg:text-xl font-normal rounded-md"
        >
          <FaRegCalendarCheck className="mx-auto text-4xl lg:text-7xl" />
          My Appointments : {appointments.length}{" "}
        </Link>
        <Link
          to="/dashboard/mySubscription"
          className="bg-primary p-4 text-white lg:text-xl font-normal rounded-md"
        >
          <MdSubscriptions className="mx-auto text-4xl lg:text-7xl" />
          My Subscriptions : {subscriptions.length}{" "}
        </Link>
        <Link
          to="/dashboard/myPrescription"
          className="bg-primary p-4 text-white lg:text-xl font-normal rounded-md"
        >
          <BsPrescription className="mx-auto text-4xl lg:text-7xl" />
          My Prescriptions : {prescriptions.length}{" "}
        </Link>
        <Link className="bg-primary p-4 text-white lg:text-xl font-normal rounded-md">
          <MdCreate className="mx-auto text-4xl lg:text-7xl" />
          {user.metadata.creationTime}
        </Link>
        <Link className="bg-primary p-4 text-white lg:text-xl font-normal rounded-md">
          <FaSignInAlt className="mx-auto text-4xl lg:text-7xl" />
          {user.metadata.lastSignInTime}
        </Link>
      </div>
      <p></p>
    </div>
  );
};

export default MyProfile;
