import React from "react";
import search from "../../images/search.svg";

const EasySteps = () => {
  return (
    <div className="mt-32">
      {/* heading */}
      <div className="">
        <h1 className="text-black text-5xl text-center ">
          Easy Steps To Feel Better Rapidly
        </h1>
        <p className="font-normal text-xl  my-12 mx-64">
          You do not have to wait in line for hours or go to the hospital to
          take healthcare services. Easily consult a doctor in just 10 minutes
          on your device at home or office.
        </p>
      </div>
      {/* main section */}
      <div className="grid grid-cols-2">
        {/* mobile */}
        {/* <div className="mockup-phone ">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1 ">Hi.</div>
          </div>
        </div> */}
        <div>
          <img src="https://doctime.com.bd/landing/home/easy_steps/phone_farme.webp" />
        </div>
        {/* list */}
        <ul className="steps steps-vertical">
          <li className="step step-primary ">
            <div className="grid grid-cols-2 items-center">
              <img className="w-24 ml-12 " src={search} />
              <div>
                <h1 className="text-xl font-semibold text-left">
                  Search your Doctor and Consult live on Video Call
                </h1>
                <p className="text-left">
                  Search your doctor by specialty or doctor profile, rating &
                  experience name, or depending on your symptoms. Once you pay
                  the required doctor fee or if you have a subscription, you
                  will be joining the short queue. Doctor will start a secured
                  video call to do the consultation.
                </p>
              </div>
            </div>
          </li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
        </ul>
      </div>
    </div>
  );
};

export default EasySteps;
