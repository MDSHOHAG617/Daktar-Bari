import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { FaFilePrescription } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi";
import Loading from "../Loading/Loading";

const MySubscription = () => {
  // Try start
  const [timeLeft, setTimeLeft] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const targetDateForThirtyDaysStored = localStorage.getItem(
      "targetDateForThirtyDays"
    );
    let targetDateForThirtyDays;

    if (targetDateForThirtyDaysStored) {
      targetDateForThirtyDays = parseInt(targetDateForThirtyDaysStored, 10);
    } else {
      targetDateForThirtyDays = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days in the future
      localStorage.setItem("targetDateForThirtyDays", targetDateForThirtyDays);
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const remainingTime = targetDateForThirtyDays - now;

      if (remainingTime <= 0) {
        clearInterval(interval);
        setIsVisible(false);
        localStorage.removeItem("targetDateForThirtyDays");
      } else {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        setTimeLeft(
          <div className="grid grid-flow-col gap-1 text-center auto-cols-max">
            <div className="flex flex-col px-2 py-1 bg-primary rounded-md text-white">
              <span className="countdown font-bold  text-md ">
                <span style={{ "--value": `${days}` }}></span>
              </span>
              <span className="font-mono text-[10px]">day</span>
            </div>
            <div className="flex flex-col px-2 py-1 bg-primary rounded-md text-white">
              <span className="countdown font-bold text-md">
                <span style={{ "--value": `${hours}` }}></span>
              </span>
              <span className="font-mono text-[10px]">hrs</span>
            </div>
            <div className="flex flex-col px-2 py-1 bg-primary rounded-md text-white">
              <span className="countdown font-bold text-md">
                <span style={{ "--value": `${minutes}` }}></span>
              </span>
              <span className="font-mono text-xs">min</span>
            </div>
            <div className="flex flex-col px-2 py-1 bg-primary rounded-md text-white">
              <span className="countdown font-bold text-md ">
                <span style={{ "--value": `${seconds}` }}></span>
              </span>
              <span className="font-mono text-xs">sec</span>
            </div>
          </div>
        );
      }
    }, 1000);

    // console.log(timeLeft);

    return () => {
      clearInterval(interval);
    };
  }, []);
  // Try end
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
              <th>Subscription</th>
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
                  {subscription.price && subscription.paid && isVisible && (
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
                <td>
                  {" "}
                  {subscription.price && subscription.paid && isVisible && (
                    <div>
                      <button>{timeLeft}</button>
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
