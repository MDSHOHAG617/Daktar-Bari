import React from "react";
import handLogo from "../../images/hand_mobile.png";
import medicine from "../../images/medicine_b-1-ol.svg";

const WhyUseDaktarBari = () => {
  return (
    <div className=" lg:mt-32">
      <h1 className="text-black text-2xl lg:text-5xl lg:text-left text-center  lg:ml-16 ">
        Why use Daktar Bari
      </h1>
      {/* hero section */}
      <div className="hero flex justify-center items-center  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={medicine} className="  w-7/12 lg:p-10 mt-4 lg:mt-0" />
          <div className="w-100 p-8">
            <ul className="steps steps-vertical">
              <li className="step step-primary font-semibold my-2 lg:my-6  font-normal text-md">
                Access any GP or specialist doctor you need at anytime from
                anywhere
              </li>

              <li className="step step-primary font-semibold text-md font-normal">
                Access to online prescriptions, medicine delivery, and tests and
                diagnostics
              </li>
              <li className="step step-primary font-semibold text-md font-normal">
                Easy subscriptions to protect you and loved ones health and
                wellbeing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUseDaktarBari;
