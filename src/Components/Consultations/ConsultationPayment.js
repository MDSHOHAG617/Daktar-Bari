import { useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import ConsultationCheckoutForm from "./ConsultationCheckoutForm";
import CheckoutForm from "../Dashboard/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51NBfETJEHFgRkHOuA6vV7x2BVhisn6cSjMQlTViK7mZnJL2hWVob53QYeW6tJJVlpkTzgxUXypAKQfxUrosnnYZN00OzHtFrck"
);

const ConsultationPayment = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const [payments, setPayments] = useState([]);
  const url = `http://localhost:5000/doctor/${id}`;
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

  //   console.log(payments);

  if (loading) {
    <Loading></Loading>;
  }
  return (
    <div className="my-32 lg:mt-26">
      <h2 className="text-xl my-5">Welcome to consultation payment</h2>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-8 mx-auto">
        <div class="card-body">
          <h2 class="card-title  p-3 rounded-lg mb-3">
            {" "}
            Pay for : Video Consultation
          </h2>
          <p className="text-cyan-500 font-mono">Hello, {user?.displayName}</p>
          <p className="text-xl font-mono text-lime-500">
            Thank's for your order
          </p>
          <p>
            Please Pay:{" "}
            <span className="font-mono"> {payments?.consultationFee} Tk</span>
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 mx-auto w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm payments={payments} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPayment;
