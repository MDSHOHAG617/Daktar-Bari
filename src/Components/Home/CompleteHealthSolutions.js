import React from "react";
import { BsArrowRight } from "react-icons/bs";
import videoConsulting from "../../images/live_video_consulting.svg";
import orderMedicin from "../../images/orderMedicin.svg";
import diagnostic from "../../images/diagonosticAtHome.svg";
import healthPackages from "../../images/healthPackages.svg";
import { Link } from "react-router-dom";

const CompleteHealthSolutions = () => {
  return (
    <div className="px-16">
      <div data-aos="fade-up" className="mt-32 ">
        <h1 className="text-2xl lg:text-6xl">Complete Health Solution</h1>
        <p className="w-10/12 lg:w-11/12 mx-auto lg:text-3xl font-normal mt-5 mb-14">
          Consulting a healthcare professional, buying medicine, ordering lab
          tests and improving your health and wellbeing, all can be done 24/7
          with Daktar bari!
        </p>
      </div>
      {/* cards */}
      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <Link
          data-aos="fade-right"
          to="/consultation"
          className="card w-72 h-52 bg-base-100 shadow-2xl mx-auto hover:border hover:opacity-75 "
        >
          <div className="card-body">
            <img className="w-10 mx-auto" src={videoConsulting}></img>
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
        </Link>
        <Link
          data-aos="fade-right"
          to="/healthPlans"
          className="card w-72 h-52 bg-base-100 shadow-2xl mx-auto hover:border hover:opacity-75"
        >
          <div className="card-body">
            <img className="w-14 mx-auto" src={healthPackages}></img>
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
        </Link>
        <Link
          data-aos="fade-left"
          to="/diagnostics"
          className="card w-72 h-52 bg-base-100 shadow-2xl mx-auto hover:border hover:opacity-75"
        >
          <div className="card-body">
            <img className="w-14 mx-auto" src={diagnostic}></img>
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
        </Link>
        <Link
          data-aos="fade-left"
          to="orderMadicine"
          className="card w-72 h-52 bg-base-100 shadow-2xl mx-auto hover:border hover:opacity-75 "
        >
          <div className="card-body">
            <img className="w-20 mx-auto" src={orderMedicin}></img>
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
        </Link>
      </div>
    </div>
  );
};

export default CompleteHealthSolutions;
