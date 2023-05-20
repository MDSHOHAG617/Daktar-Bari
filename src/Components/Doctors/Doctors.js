import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

const Doctors = () => {
  const { category } = useParams();
  console.log(category);
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
        <div className=" hover:shadow-xl py-12 rounded-md mb-4 border-[1px]">
          <div className="lg:flex lg:justify-around  lg:items-center ">
            <img className="lg:w-32" src={doctor?.imageUrl} />
            <div className="text-left">
              <h2 className="">
                {doctor.firstName} {doctor.lastName}
              </h2>
              <h2 className="font-normal mb-4">{doctor.specialty}</h2>
              <h2 className="font-normal">Specialties</h2>
              <h2 className="font-semibold">{doctor.title}</h2>
            </div>
            <div className="text-left">
              <div className="mb-4">
                <h2 className="font-normal ">Working in</h2>
                {doctor.workAt}
              </div>
              <div className="">
                <h2 className="font-normal">Total Experience</h2>
                {doctor.experience} + Years
              </div>
            </div>
            <div className="text-left">
              <div className="text-[#07c0ba] ">
                <span className="text-2xl font-extrabold">৳</span>{" "}
                <span className="text-2xl">{doctor.consultationFee} </span>
              </div>
              <span className="font-normal ">(include. VAT)</span>
              <h2 className="font-normal mt-4">Per Consultation</h2>
            </div>
            <div>
              <SlArrowRight className="text-4xl text-[#07c0ba]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doctors;
