import React from "react";
import { BsArrowRight } from "react-icons/bs";

const CompleteHealthSolutions = () => {
  return (
    <div className="px-20 ">
      <div className="mt-20 ">
        <h1 className="text-6xl">Complete Health Solution</h1>
        <p className="w-10/12 lg:w-11/12 mx-auto text-3xl font-normal mt-5 mb-14">
          Consulting a healthcare professional, buying medicine, ordering lab
          tests and improving your health and wellbeing, all can be done 24/7
          with DocTime!
        </p>
      </div>
      {/* cards */}
      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div className="card w-72 h-52 bg-base-100 shadow-2xl mx-auto hover:border hover:opacity-75 ">
          <div className="card-body">
            <img
              className="w-12 mx-auto"
              src="https://doctime.com.bd/landing/icons/service/Video.svg"
            ></img>
            <h2 className="card-title mx-auto">Live Video Consultation</h2>
            <p className="font-normal ">
              Instant video consultation or schedule a futre appoinment
            </p>
            <div className="card-actions justify-end">
              <span className="mx-auto text-xl font-bold  hover:visible ">
                <BsArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className="card w-72 h-52 bg-base-100 shadow-2xl mx-auto hover:border hover:opacity-75">
          <div className="card-body">
            <img
              className="w-8 mx-auto"
              src="https://doctime.com.bd/landing/icons/service/Protection.svg"
            ></img>
            <h2 className="card-title mx-auto">healthcare Packages</h2>
            <p className="font-normal ">
              Consultations, hospital care, insurance & more
            </p>
            <div className="card-actions justify-end">
              <span className="mx-auto text-xl font-bold  hover:visible ">
                <BsArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className="card w-72 h-52 bg-base-100 shadow-2xl mx-auto hover:border hover:opacity-75">
          <div className="card-body">
            <img
              className="w-12 mx-auto"
              src="https://doctime.com.bd/landing/icons/service/Diagnostic.svg"
            ></img>
            <h2 className="card-title mx-auto">Diagnostic at Home</h2>
            <p className="font-normal ">
              Get tested at home & get report within 24 hours
            </p>
            <div className="card-actions justify-end">
              <span className="mx-auto text-xl font-bold  hover:visible ">
                <BsArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className="card w-72 h-52 bg-base-100 shadow-2xl mx-auto hover:border hover:opacity-75 ">
          <div className="card-body">
            <img
              className="w-12 mx-auto"
              src="https://doctime.com.bd/landing/icons/service/Medicine.svg"
            ></img>
            <h2 className="card-title mx-auto">Order Medicine Online</h2>
            <p className="font-normal ">
              Order easily and get the medicine in 1 hour
            </p>
            <div className="card-actions justify-end">
              <span className="mx-auto text-xl font-bold  hover:visible ">
                <BsArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteHealthSolutions;
