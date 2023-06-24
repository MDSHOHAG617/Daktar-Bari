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
  // console.log(payments);
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
      <h2 className="text-xl my-5">Welcome to payment</h2>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-8 mx-auto">
        <div class="card-body">
          <h2 class="card-title  p-3 rounded-lg mb-3">
            {" "}
            Pay for : {payments?.name}
          </h2>
          <p className="text-cyan-500 font-mono">
            Hello, {payments.customerName}
          </p>
          <p className="text-xl font-mono text-lime-500">
            Thank's for your subscription
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
