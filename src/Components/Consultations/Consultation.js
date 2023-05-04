import React from "react";

const Consultation = ({ specialty }) => {
  return (
    <div>
      <div className="specialty  rounded-xl shadow-xl hover:opacity-80 h-full">
        <div className="lg:flex  items-center ">
          {" "}
          <img
            className="w-24 mx-auto mr-auto lg:m-8  "
            src={specialty.image}
          />
          <div className="info lg:text-left card-body">
            <h1 className="text-xl font-bold ">{specialty.heading}</h1>
            <p className="text-sm font-normal">{specialty.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
