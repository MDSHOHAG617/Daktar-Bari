import React from "react";
import { TiTick } from "react-icons/ti";

const AvailableSpecialties = () => {
  return (
    <div className="mx-16 mt-32 ">
      <h1 className=" text-left text-2xl lg:text-5xl  mb-16">
        Available specialties
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div>
          <div className="flex items-center mb-4 ">
            <TiTick className="text-primary mr-4 text-xl " />
            <p className="text-md font-semibold">General Physician</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Pediatrics / Child Care</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Gynaecology</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Neurology / Brain</p>
          </div>

          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Pulmonology / Lungs</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Nutritionist</p>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Gastroenterology</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Cardiology / Heart</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Ophthalmology / Eye</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Dentistry / Dental Care</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Endocrinology / Diabetes</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Occupational therapy</p>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Nephrology / Kidney</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Obstetrics</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">ENT / Ear, Nose and Throat</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Parasitology</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Podiatry</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Oncology</p>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Dermatology</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Psychological counsellor</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Rheumatology</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Urology</p>
          </div>
          <div className="flex items-center mb-4">
            <TiTick className="text-primary mr-4 text-xl" />
            <p className="text-md font-semibold">Chiropractic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableSpecialties;
