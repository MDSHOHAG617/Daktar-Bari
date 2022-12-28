import React from "react";
import services from "../../images/mainServices.svg";

const MainServices = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:mx-16 mt-16 lg:mt-32">
      <div className="left-sec lg:text-left  lg:mr-16">
        {" "}
        <h1 className=" text-xl lg:text-5xl mb-4 lg:mb-16 ">
          Services of Daktar bari{" "}
        </h1>
        <p className="text-md font-semibold text-justify  mx-4 lg:mx-0">
          Daktar bari is an end-to-end health solution that enables better
          health and wellbeing with advanced technology.
          <br></br>
          <br></br>
          Daktar bari offers several services including healthcare and
          protection subscriptions packages, certified and verified GP and
          specialist consultations (80% of our patients wait less than 10min to
          be connected to a doctor), online prescriptions, medicine delivery,
          and integrated tests and diagnostics. Our secure technology gives
          affordable access to healthcare for all.
        </p>
      </div>
      <div className="mt-8 lg:mt-0">
        <img className="" src={services} />
      </div>
    </div>
  );
};

export default MainServices;
