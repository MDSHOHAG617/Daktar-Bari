import React from "react";

const WhyUseDoctime = () => {
  return (
    <div>
      <h1 className="text-black text-5xl text-left ml-20">
        Why use Daktar Bari
      </h1>
      {/* hero section */}
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <ul className="steps steps-vertical">
              <li className="step step-primary my-4  font-normal ">
                Access any GP or specialist doctor you need at anytime from
                anywhere
              </li>

              <li className="step step-primary  font-normal">
                Access to online prescriptions, medicine delivery, and tests and
                diagnostics
              </li>
              <li className="step step-primary  font-normal">
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

export default WhyUseDoctime;
