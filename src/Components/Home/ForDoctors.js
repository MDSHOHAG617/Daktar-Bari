import React from "react";

const ForDoctors = () => {
  return (
    <div className="mt-32 px-16">
      <h1 className="font-bold text-2xl lg:text-5xl lg:text-left">
        Are You <br></br> A Qualified Doctor?
      </h1>
      <h2 className="font-bold text-lg  lg:text-2xl lg:text-left mt-8 mb-8">
        Join the forefront of digital healthcare
      </h2>
      <div className="">
        <p className="font-normal text-lg font-semibold lg:text-left ">
          Join DocTime network and create your virtual chamber provide medical
          consultancy via video call and expand the reach of your service.{" "}
        </p>
        <p className="mt-8 font-normal text-lg font-semibold lg:text-left">
          Enroll yourself just in minutes!
        </p>
        <button className="btn rounded-full bg-[#07C0BA] border-none  text-white px-8 btn-md float-left	">
          Sign up Now
        </button>
      </div>
    </div>
  );
};

export default ForDoctors;
