import React from "react";
import services from "../../images/mainServices.svg";

const MainServices = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center mx-16 mt-32">
      <div className="left-sec lg:text-left text-center mr-16">
        {" "}
        <h1 className="text-black text-xl lg:text-5xl  mb-16">
          Services of Daktar bari{" "}
        </h1>
        <p className="text-md font-semibold">
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
      <div className="">
        <img className="" src={services} />
      </div>
    </div>
  );
};

export default MainServices;
