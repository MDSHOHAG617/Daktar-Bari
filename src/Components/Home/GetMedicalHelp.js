import React from "react";
import nilima from "../../images/nilima.png";
import doctors from "../../images/doctors_re_8ou9.svg";

const GetMedicalHelp = () => {
  return (
    <div className="ml-20">
      {/* headings */}
      <div className="headings my-32">
        <h3 className="text-2xl font-semibold text-left">Get medical help</h3>
        <h1 className="text-black text-5xl text-left ">Just in few taps!</h1>
      </div>
      {/* grid row */}
      <div className="main-div grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-4 gap-4  mr-20 ">
        <div className="grid-item  w-64 ">
          <h1 className="text-primary text-2xl font-semibold text-left mb-8">
            Easy to use
          </h1>
          <p className="text-md font-normal text-left">
            Get the best user experience on DocTime App. Search for a doctor and
            get an instant consultation. You can join the online queue
            <br></br>
            <br></br>
            <br></br>
            immediately, while you can continue doing other tasks at home or
            office.
          </p>
        </div>
        <div className="grid-item w-64">
          <h1 className="text-primary text-2xl font-semibold text-left mb-8 ">
            AnyTime
          </h1>
          <p className="text-md font-normal text-left">
            Talk to a doctor within minutes. Our qualified network of doctors is
            available 24/7.
            <br></br>
            <br></br>
            You can get a consultation and prescription whenever you need.
            Patients and doctors can keep their previous consultation history
            and view online prescriptions.
          </p>
        </div>
        <div className="grid-item w-64">
          <h1 className="text-primary text-2xl font-semibold text-left mb-8">
            Trusted
          </h1>
          <p className="text-md font-normal text-left">
            DocTime's experienced doctors, specialists and therapists are
            selected carefully. Safety and quality is at the heart of everything
            we do. Each doctor is certified, registered, and operates to the
            highest clinical standards. DocTime uses 256 bit encryption to
            secure the video consultation.
          </p>
        </div>
        <div className="grid-item  hidden lg:block ">
          <img className="" src={doctors}></img>
        </div>
      </div>
    </div>
  );
};

export default GetMedicalHelp;
