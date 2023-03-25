import React, { useState } from "react";

import { TiTick } from "react-icons/ti";
import care from "../../images/care.png";

const HealthPlan = ({ plan }) => {
  const { services } = plan;
  // console.log(services);
  return (
    <div>
      <div className="plan card-body hover: hover:opacity-80 p-4 rounded-xl relative card shadow-2xl h-full">
        <div class="flex justify-between  items-start  ">
          <div>
            <h1 className="text-left text-xl text-primary">{plan.name}</h1>
            <p className="text-left ">
              <span className="text-xl font-mono">{plan.price}</span>
              <span className="text-sm font-semibold">{plan.perMonth}</span>
            </p>
            <p className="text-left font-normal mt-2 mb-6">{plan.for} </p>
          </div>
          <div>
            <img className="w-14 " src={plan.img}></img>
          </div>
        </div>
        {/* services */}
        <div className=" text-left mb-16">
          {services.map((service) => (
            <p className="flex items-start font-normal mb-3">
              <span className="">
                <TiTick className=" mt-1 text-lg" />
              </span>
              {service.service}
            </p>
          ))}
        </div>
        <button className="btn btn-primary text-white btn-sm float-left  absolute bottom-4 left-4">
          {plan.button}
        </button>
      </div>
    </div>
  );
};

export default HealthPlan;
