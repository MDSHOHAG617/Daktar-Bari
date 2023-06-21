import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubscriptionCheckoutForm from "./SubscriptionCheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51NBfETJEHFgRkHOuA6vV7x2BVhisn6cSjMQlTViK7mZnJL2hWVob53QYeW6tJJVlpkTzgxUXypAKQfxUrosnnYZN00OzHtFrck"
);

const SubscriptionPayments = () => {
  const { id } = useParams();
  const [payments, setPayments] = useState([]);
  const url = `http://localhost:5000/subscriptions/${id}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, [payments]);

  return (
    <div>
      <h2 className="text-xl my-5">Welcome to Subscription payment</h2>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-8 mx-auto">
        <div class="card-body">
          <h2 class=" font-normal p-3 rounded-lg mb-3">
            Pay for : (<span className="font-bold"> {payments.name} </span>)
          </h2>
          <p className="font-mono">
            Hello,{" "}
            <span className="text-[#07C0BA]">{payments.customerName}</span>
          </p>
          <p className="text-xl font-mono text-[#07C0BA]">
            Thank's for your Booking
          </p>
          <p>
            Please Pay: <span className="font-mono"> {payments.price} Tk</span>
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 mx-auto w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <SubscriptionCheckoutForm payments={payments} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPayments;
