import React from "react";
import medicalcare from "../../images/medical_care_movn.svg";

const WhenTouseDaktarBari = () => {
  return (
    <div className="mt-12 lg:mt-32">
      <h1 className=" text-2xl lg:text-5xl lg:text-right  lg:mr-20 mb-20">
        When to use Daktar Bari
      </h1>
      {/* grid */}
      <div className="main-grid grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="lg:ml-16  mx-auto lg:mx-0 mb-4 lg:mb-0">
          <img className="w-96 lg:w-full" src={medicalcare}></img>
        </div>
        <div className="mx-10 mr-16">
          <div className="items mb-4 lg:mb-12 text-left">
            <h1 className="text-2xl font-semibold mb-1 lg:mb-5">
              Common health issue
            </h1>
            <p className="font-normal text-md ">
              Ask anything you would normally ask your GP. You can have an
              instant video with one of our GPs via a digital consultation from
              anywhere, at any time of day.
            </p>
          </div>
          <div className="items mb-4 lg:mb-12 text-left">
            <h1 className="text-2xl font-semibold mb-1  lg:mb-5">
              Specialist advice
            </h1>
            <p className="font-normal text-md ">
              Sometimes it’s helpful to see a specialist when you want. For
              gynaecology, child specialists, dermatology, cardiology,
              gastroenterology, nutrition,chronic diseases such as hypertension,
              or other conditions, Daktar bari can help you to connect with the
              right specialist doctor and to stay healthy. More than 20
              different specialities are available on Daktar bari.
            </p>
          </div>
          <div className="items mb-12 text-left">
            <h1 className="text-2xl font-semibold mb-1 lg:mb-5">
              Mental health and wellbeing
            </h1>
            <p className="font-normal text-md ">
              In a fast paced world, it is important to monitor and protect your
              mental health and wellbeing. Doctors can help you stay healthy
              whether you have symptoms at home or in your workplace of stress,
              smoking, anxiety, bereavement or depression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhenTouseDaktarBari;
