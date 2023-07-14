import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { FaFilePrescription } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi";
import Loading from "../Loading/Loading";

const MySubscription = () => {
  const [subscriptions, setSubscription] = useState([]);
  const [user, loading] = useAuthState(auth);
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
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mt-4">
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
          <tbody className="font-normal">
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
                      <button className="btn btn-xs btn-primary text-white">
                        Pay
                      </button>
                    </Link>
                  )}
                  {subscription.price && subscription.paid && (
                    <div>
                      {/* <Link to="/prescription" className="">
                        <FaFilePrescription className="text-2xl" />
                      </Link> */}
                      <a
                        href="https://meet.google.com/ouj-vjtb-gjx"
                        className=" flex items-center gap-1 bg-primary rounded-full px-2 py-[3px] mt-1  text-white w-32"
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
