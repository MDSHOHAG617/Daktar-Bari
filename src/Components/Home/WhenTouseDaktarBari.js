import React from "react";

const WhenTouseDaktarBari = () => {
  return (
    <div className="mt-32">
      <h1 className="text-black text-5xl text-right mr-20 mb-20">
        When to use Daktar Bari
      </h1>
      {/* grid */}
      <div className="main-grid grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="ml-20">
          <img
            className=""
            src="https://doctime.com.bd/landing/home/head_pain.webp"
          ></img>
        </div>
        <div className="mx-10 mr-20">
          <div className="items mb-12 text-left">
            <h1 className="text-2xl font-semibold mb-5">Common health issue</h1>
            <p className="font-normal text-md ">
              Ask anything you would normally ask your GP. You can have an
              instant video with one of our GPs via a digital consultation from
              anywhere, at any time of day.
            </p>
          </div>
          <div className="items mb-12 text-left">
            <h1 className="text-2xl font-semibold mb-5">Specialist advice</h1>
            <p className="font-normal text-md ">
              Sometimes it’s helpful to see a specialist when you want. For
              gynaecology, child specialists, dermatology, cardiology,
              gastroenterology, nutrition,chronic diseases such as hypertension,
              or other conditions, DocTime can help you to connect with the
              right specialist doctor and to stay healthy. More than 20
              different specialities are available on DocTime.
            </p>
          </div>
          <div className="items mb-12 text-left">
            <h1 className="text-2xl font-semibold mb-5">
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
