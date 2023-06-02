import React, { useEffect, useState } from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";

const Doctor = () => {
  const { id } = useParams();
  //   console.log(id);

  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/doctor/${id}`)
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, [id]);

  return (
    <div className="my-32 px-16">
      <div className=" p-4 lg:py-12 rounded-md mb-4  border-[1px] ">
        <div className="lg:flex lg:justify-around ">
          <div className=" lg:text-left lg:flex gap-x-8">
            <img
              className=" mx-auto lg:mx-0 lg:w-52 rounded-md"
              src={doctor?.imageUrl}
            />
            <div className="mt-8 lg:mt-0 ">
              <h2 className="text-2xl">
                {doctor.firstName} {doctor.lastName}
              </h2>
              <h2 className="font-normal">{doctor.specialty}</h2>
              <h2 className="font-normal">Specialties</h2>
              <h2 className="font-semibold">{doctor.title}</h2>
              <h2 className="w-9/12">
                <span className="font-normal">Working at </span>
                {doctor.workAt}
              </h2>
            </div>
          </div>

          {/* <div className="">
            <h2 className="font-normal">Total Experience</h2>
            {doctor.experience} + Years
          </div> */}
          <div className="mt-4 lg:mt-0 ">
            <h2 className="text-xl lg:mt-4">Consultation Fee</h2>
            <div className=" my-2">
              <span className="text-2xl font-extrabold text-[#07c0ba]">৳</span>{" "}
              <span className="text-2xl text-[#07c0ba]">
                {doctor.consultationFee}{" "}
              </span>
              <span className="font-normal ">(include. VAT)</span>
            </div>
            <Link
              to={`/booking/${id}`}
              className="flex items-center  gap-2  text-white mt-4 bg-[#07C0BA] py-3 px-7  rounded-full justify-center"
            >
              <HiOutlineVideoCamera className="text-3xl disable" />
              <p className="text-lg font-semibold ">See Doctor Now</p>
            </Link>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 lg:grid-cols-4 justify-around my-8">
        <div className="mb-4 lg:mb-0">
          <h2 className="font-normal">Total Experience</h2>
          <p>{doctor.experience} Years</p>
        </div>
        <div>
          <h2 className="font-normal">BMDC Number</h2>
          <p>103280</p>
        </div>
        <div>
          <h2 className="font-normal">Joined Daktar Bari</h2>
          <p>8 Feb 2021</p>
        </div>
        <div>
          <h2 className="font-normal">Total Experience</h2>
          <p>{doctor.experience} Years</p>
        </div>
      </div>

      <hr className="my-6"></hr>
      {/* left-info */}
      <div className="doctor-info lg:flex  lg:w-full">
        <div className="text-left lg:w-1/2  shadow-md p-4 rounded-md h-full">
          <h1 className="text-2xl mb-2">
            About {doctor.firstName} {doctor.lastName} - {doctor.specialty}
          </h1>
          <p className="font-normal">{doctor.about}</p>
        </div>
        {/* right-info */}
        <div className="lg:w-1/2  lg:ml-8 mt-8 lg:mt-0">
          <div className="shadow-md rounded-md p-4">
            <h1 className="text-xl mb-4">Availability</h1>
            <p className="font-normal">Instant Consultation Time</p>
            <p>{doctor.availability}</p>
          </div>{" "}
          <div className="shadow-md pb-4 rounded-md">
            <h1 className="text-xl my-8 ">At a Glance</h1>
            <div className=" at-a-glance mt-8 grid grid-cols-2">
              <div className="">
                <p className="font-normal text-xl mb-1">Consultation Fee</p>
                <div className="">
                  <span className="text-md font-extrabold text-[#07c0ba]">
                    ৳
                  </span>{" "}
                  <span className="text-md text-[#07c0ba]">
                    {doctor.consultationFee}{" "}
                  </span>
                  <span className="font-semibold ">(incl. VAT)</span>
                </div>
              </div>
              <div className="mb-8">
                <p className="font-normal font-normal text-xl mb-1">
                  Follow-up fee
                </p>
                <div className="">
                  <span className="text-md font-extrabold text-[#07c0ba]">
                    ৳
                  </span>{" "}
                  <span className="text-md text-[#07c0ba]">200</span>
                  <span className="font-semibold "> (incl. VAT)</span>
                  <p className="font-normal ">(Within 14 days)</p>
                </div>
              </div>
              <div>
                <p className="font-normal font-normal text-xl mb-1">
                  Patient attended
                </p>
                <p className="font-normal">25865</p>
              </div>
              <div>
                <p className="ffont-normal font-normal text-xl mb-1">
                  Doctor code
                </p>
                <p className="font-normal">DT2056</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
