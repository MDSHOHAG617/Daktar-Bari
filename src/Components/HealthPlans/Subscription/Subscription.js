import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

import { TiTick } from "react-icons/ti";

const Subscription = () => {
  const { id } = useParams();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}/${month}/${year}`;
  let endDate = `${day}/${month + 1}/${year}`;
  let expireDate = `${day}/${month + 1}/${year}`;
  //   console.log(currentDate); // "17-6-2022"
  console.log(expireDate); // "17-6-2022"

  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [subscription, setSubscription] = useState({});
  console.log(subscription);
  const { services, _id, price, name } = subscription;

  const handleBooking = (event) => {
    event.preventDefault();
    const phone = event.target.phone.value;
    const age = event.target.age.value;
    const gender = event.target.gender.value;
    const date = event.target.date.value;
    const userAddress = event.target.address.value;
    const subscriptionFee = event.target.subscriptionFee.value;
    // console.log(phone, userAddress);
    const subscription = {
      subscriptionId: _id,
      customerName: user.displayName,
      customerEmail: user.email,
      userAddress,
      phone,
      price,
      name,
      gender,
      date,
      expireDate,
      age,
      currentDate,
      expireDate,
      endDate,
    };
    fetch("http://localhost:5000/subscriptions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(subscription),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Subscription Succeed");
        navigate("/dashboard/mySubscription");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/healthPlans/${id}`)
      .then((res) => res.json())
      .then((data) => setSubscription(data));
  }, [id]);
  return (
    <div className="my-28 font-normal">
      <h1 className="mb-8 ">
        {" "}
        Subscription for :{" "}
        <span className="font-semibold text-primary">{subscription.name}</span>
      </h1>
      <div class=" mb-28 ">
        <div class=" grid grid-cols-1 lg:grid-cols-2 items-center ">
          <div className="card flex-shrink-0 w-full max-w-sm  mx-auto text-left shadow-2xl rounded-md p-2">
            <figure className="">
              <img className="w-8/12" src={subscription?.img} alt="" />
            </figure>
            <div className=" mt-4 items-center text-center">
              <h2 className=" text-center font-bold">{subscription?.name}</h2>
              <p className=" my-2 ">{subscription?.for}</p>

              <div>
                {services?.map((service) => (
                  <p className="flex text-left  mb-3">
                    <span className="mt- mr-2">
                      <TiTick className="text-xl " />
                    </span>
                    {service.service}
                  </p>
                ))}
              </div>
              <p>
                <span className="font-mono ">
                  Fee : {subscription.price} tk {subscription.perMonth}
                </span>
              </p>
            </div>
          </div>
          <form onSubmit={handleBooking}>
            <div class="card flex-shrink-0 w-full max-w-lg  mx-auto  rounded-md p-2 shadow-2xl">
              <div class="card-body ">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-xs">Name</span>
                  </label>
                  <input
                    value={user?.displayName}
                    name="name"
                    type="name"
                    class="input input-bordered input-sm text-xs"
                    disabled
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-xs">Email</span>
                  </label>
                  <input
                    value={user?.email}
                    type="email"
                    name="email"
                    disabled
                    class="input input-bordered input-sm text-xs"
                  />
                </div>
                <div className="flex gap-x-4">
                  <div class="form-control w-1/2">
                    <input
                      placeholder="Your age"
                      required
                      type="number"
                      name="age"
                      class="input input-bordered input-sm text-xs"
                    />
                  </div>
                  <div class="form-control w-1/2">
                    <input
                      placeholder="Gender"
                      required
                      type="text"
                      name="gender"
                      class="input input-bordered input-sm text-xs"
                    />
                  </div>
                </div>

                <div className="flex gap-x-4">
                  <div class="form-control w-1/2">
                    <input
                      placeholder="Specialist in."
                      type="text"
                      name="specialist"
                      value={subscription?.name}
                      disabled
                      class="input input-bordered input-sm text-xs"
                    />
                  </div>
                  <div class="form-control w-1/2">
                    <input
                      value={currentDate}
                      disabled
                      name="date"
                      class="input input-bordered input-sm text-xs"
                    />
                  </div>
                </div>
                <div class="form-control ">
                  <input
                    value={subscription.price}
                    disabled
                    name="subscriptionFee"
                    class="input input-bordered input-sm text-xs"
                  />
                </div>
                <div class="form-control">
                  <input
                    required
                    name="phone"
                    type="number"
                    placeholder="phone"
                    class="input input-bordered input-sm text-xs"
                  />
                </div>
                <div class="form-control">
                  <textarea
                    required
                    name="address"
                    class="textarea textarea-bordered h-16"
                    placeholder="Address"
                  ></textarea>
                </div>
                <div class="form-control ">
                  <button class="btn text-white bg-[#07C0BA] border-none hover:bg-[#07C0BA]">
                    place the Subscription
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
