import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Booking = () => {
  //   Date
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}/${month}/${year}`;
  let expireDate = `${day}/${month}/${year}`;
  console.log(expireDate); // "17-6-2022"

  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const [bookings, setBookings] = useState({});
  console.log(bookings);
  const {
    firstName,
    imgUrl,
    desc,
    min_order_quantity,
    available_quantity,
    price,
    consultationFee,
    specialty,
    _id,
    category,
  } = bookings;

  const handleBooking = (event) => {
    event.preventDefault();
    const phone = event.target.phone.value;
    const age = event.target.age.value;
    const gender = event.target.gender.value;
    const userAddress = event.target.address.value;
    // console.log(phone, userAddress);
    const booking = {
      bookingId: _id,
      Doctor: firstName,
      customerName: user.displayName,
      customerEmail: user.email,
      userAddress,
      phone,
      specialty,
      consultationFee,
      gender,
      category,
      age,
      price,
      currentDate,
      expireDate,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Booking Succeed");
        navigate("/dashboard/myAppointments");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/doctor/${id}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [id]);

  return (
    <div className="my-28 font-normal">
      <h1 className="mb-8 ">
        {" "}
        Appointments for :{" "}
        <span className="font-semibold text-primary">Video Consultation</span> (
        {bookings.firstName} {bookings.lastName})
      </h1>
      <div class=" mb-28 ">
        <div class=" grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="card flex-shrink-0 w-full max-w-sm  mx-auto text-left shadow-2xl rounded-md p-2">
            <figure className="">
              <img src={bookings?.imageUrl} className="  rounded-md" alt="" />
            </figure>
            <div className=" mt-4 items-center text-center">
              <h2 className=" text-center font-bold">
                {bookings?.firstName} {bookings.lastName}
              </h2>
              <p className="text-left my-2 px-4">{bookings.about}</p>

              <p>
                <span className="font-mono ">
                  Consultation Fee : {bookings.consultationFee} tk
                </span>
              </p>
              <div className="card-actions"></div>
            </div>
          </div>
          <form onSubmit={handleBooking}>
            <div class="card flex-shrink-0 w-full max-w-lg  mx-auto shadow-2xl rounded-md p-2">
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
                      type="text"
                      name="doctor"
                      value={bookings.firstName}
                      disabled
                      class="input input-bordered input-sm text-xs"
                    />
                  </div>
                  <div class="form-control w-1/2">
                    <input
                      type="number"
                      name="consultationFee"
                      value={bookings.consultationFee}
                      disabled
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
                      value={bookings?.specialty}
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
                    place the Booking
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

export default Booking;
