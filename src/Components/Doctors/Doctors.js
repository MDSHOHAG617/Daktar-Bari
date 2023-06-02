import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

const Doctors = () => {
  const { category } = useParams();
  // console.log(category);
  const [doctors, setDoctors] = useState([]);
  console.log(category);

  useEffect(() => {
    fetch(`http://localhost:5000/doctor/category/${category}`)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, [category]);
  console.log(doctors);
  return (
    <div className="my-32 px-4 lg:px-16 ">
      <p className="text-left font-semibold my-4">
        <span className="text-[#07c0ba]"> {doctors.length}</span> Doctors found
        in {category}
      </p>

      {doctors.map((doctor) => (
        <div className=" hover:shadow-xl p-4 lg:py-12 rounded-md mb-4 border-[1px]">
          <div className="lg:flex lg:justify-around  lg:items-center ">
            <img
              className=" mx-auto lg:mx-0 lg:w-32 rounded-md"
              src={doctor?.imageUrl}
            />
            <div className="text-left lg:w-1/4">
              <h2 className="mt-4 lg:mt-0">
                {doctor.firstName} {doctor.lastName}
              </h2>
              <h2 className="font-normal mb-4">{doctor.specialty}</h2>
              <h2 className="font-normal">Specialties</h2>
              <h2 className="font-semibold">{doctor.title}</h2>
            </div>
            <div className="text-left lg:w-1/4">
              <div className="mb-4 mt-4 lg:mt-0">
                <h2 className="font-normal ">Working at</h2>
                {doctor.workAt}
              </div>
              <div className="">
                <h2 className="font-normal">Total Experience</h2>
                {doctor.experience} + Years
              </div>
            </div>
            <div className="text-left mt-4 lg:mt-0">
              <div className="text-[#07c0ba] ">
                <span className="text-2xl font-extrabold">৳</span>{" "}
                <span className="text-2xl">{doctor.consultationFee} </span>
              </div>
              <span className="font-normal ">(include. VAT)</span>
              <h2 className="font-normal lg:mt-4">Per Consultation</h2>
            </div>
            <Link to={`/doctor/${doctor._id}`}>
              <SlArrowRight className="text-4xl text-[#07c0ba] mx-auto lg:mx-0" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doctors;
