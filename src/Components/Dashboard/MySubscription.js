import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { FaFilePrescription } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi";

const MySubscription = () => {
  const [subscriptions, setSubscription] = useState([]);
  const [user] = useAuthState(auth);
  console.log(subscriptions);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/subscriptions?customerEmail=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setSubscription(data));
    }
  }, [user]);
  return (
    <div className="mt-4">
      My subscriptions
      <div class="overflow-x-auto ">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Subscription on</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((subscription, index) => (
              <tr key={subscription._id}>
                <th>{index + 1}</th>
                <td>{subscription.customerName}</td>
                <td>{subscription.customerEmail}</td>
                <td>{subscription.name}</td>
                <td>
                  {subscription.price && !subscription.paid && (
                    <Link
                      to={`/dashboard/subscriptionsPayments/${subscription._id}`}
                    >
                      <button className="btn btn-xs btn-success">Pay</button>
                    </Link>
                  )}
                  {subscription.price && subscription.paid && (
                    <div>
                      <Link to="/prescription" className="">
                        <FaFilePrescription className="text-3xl" />
                      </Link>
                      <a
                        href="https://meet.google.com/ouj-vjtb-gjx"
                        className=" flex items-center gap-1 bg-[#07C0BA] rounded-full px-2 py-1 mt-2  text-white w-32"
                      >
                        <HiOutlineVideoCamera className="text-  " />
                        <p className="text-xs font-normal ">See Doctor Now</p>
                      </a>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySubscription;
