import React from "react";
import { TiTick } from "react-icons/ti";
import { ImFire } from "react-icons/im";
import care from "../../images/care.png";
const CareAndProtectionPlant = () => {
  return (
    <div>
      <div className="plans grid gap-6 grid-cols-1 lg:grid-cols-3 mx-16 mb-10 ">
        <div
          data-aos="fade-right"
          className="plan card-body hover: hover:opacity-80 p-4 rounded-xl relative card shadow-2xl"
        >
          <div class="flex justify-between  items-start  ">
            <div>
              <h1 className="text-left text-xl text-primary">
                Daktar bari Care
              </h1>
              <p className="text-left ">
                <span className="text-xl font-mono">৳ 114 </span>
                <span className="text-sm font-semibold">/month</span>
              </p>
              <p className="text-left font-normal mt-2 mb-6">For 1 adult </p>
            </div>
            <div>
              <img className="w-28 " src={care}></img>
            </div>
          </div>
          <div className=" text-left mb-16">
            <p className="flex items-start font-normal mb-3">
              <span className="">
                <TiTick className=" mt-1 text-lg" />
              </span>
              Unlimited consultations with our experienced on duty General
              Physician & Gynaecology Doctors
            </p>
            <p className="flex items-start font-normal">
              <span className="">
                <TiTick className=" mt-1 text-lg" />
              </span>
              Upto 40% discount on home diagnostic tests.
            </p>
          </div>
          <button className="btn btn-primary text-white btn-sm float-left  absolute bottom-4 left-4">
            Subscribe now
          </button>
        </div>
        <div
          data-aos="fade-up"
          className="plan card-body hover: hover:opacity-80 p-4 rounded-xl relative card shadow-2xl"
        >
          <div class="flex justify-between  items-start  ">
            <div>
              <div className="relative ">
                <h1 className="most-popular absolute bottom-1 bg-[#FF0000] text-white px-3 py-0.5 rounded-md font-semibold text-sm flex items-center ">
                  <ImFire className="text-white text-xs mr-1" />
                  Most Popular
                </h1>
              </div>

              <h1 className="text-left text-xl text-primary">
                Daktar bari Care Plus
              </h1>
              <p className="text-left">
                <span className="text-xl font-mono">৳ 200</span>
                <span className="text-sm font-semibold">/month</span>
              </p>
              <p className="text-left font-normal mt-2 mb-6">For 1 adult </p>
            </div>
            <div>
              <img className="w-28 " src={care}></img>
            </div>
          </div>
          <div className=" text-left mb-16">
            <p className="flex items-start font-normal mb-3">
              <span className="">
                <TiTick className=" mt-1 text-lg" />
              </span>
              Unlimited consultations with our experienced on duty General
              Physician & Gynaecology Doctors
            </p>
            <p className="flex items-start font-normal">
              <span className="">
                <TiTick className=" mt-1 text-lg" />
              </span>
              Upto 40% discount on home diagnostic tests.
            </p>
            <p className="flex items-start font-normal">
              <span className="">
                <TiTick className=" mt-1 text-lg" />
              </span>
              ৳ 40,000 cashback ons health & life insurance.
            </p>
          </div>
          <button className="btn btn-primary text-white btn-sm float-left  absolute bottom-4 left-4">
            Subscribe now
          </button>
        </div>
        <div
          data-aos="fade-left"
          className="plan card-body hover: hover:opacity-80 p-4 rounded-xl relative card shadow-2xl"
        >
          <div class="flex justify-between  items-start  ">
            <div>
              <h1 className="text-left text-xl text-primary">
                Daktar bari Family Care
              </h1>
              <p className="text-left">
                <span className="text-xl font-mono">৳ 309 </span>
                <span className="text-sm font-semibold">/month</span>
              </p>
              <p className="text-left font-normal mt-2 mb-6">
                For 3 family members{" "}
              </p>
            </div>
            <div>
              <img className="w-28 " src={care}></img>
            </div>
          </div>
          <div className=" text-left mb-16">
            <p className="flex items-start font-normal mb-3">
              <span className="">
                <TiTick className=" mt-1 text-lg" />
              </span>
              Unlimited consultations with our experienced on duty General
              Physician & Gynaecology Doctors
            </p>
            <p className="flex items-start font-normal">
              <span className="">
                <TiTick className=" mt-1 text-lg" />
              </span>
              Upto 40% discount on home diagnostic tests.
            </p>
          </div>
          <button className="btn btn-primary text-white btn-sm float-left  absolute bottom-4 left-4 ">
            Subscribe now
          </button>
        </div>
        <div
          data-aos="fade-right"
          className="plan card-body hover: hover:opacity-80 p-4 rounded-xl relative card shadow-2xl"
        >
          <div class="flex justify-between  items-start  ">
            <div>
              <h1 className="text-left text-xl text-primary">
                Daktar bari Special Care
              </h1>
              <p className="text-left">
                <span className="text-xl font-mono">৳ 451 </span>
                <span className="text-sm font-semibold">/month</span>
              </p>
              <p className="text-left font-normal mt-2 mb-6">For 1 adult </p>
            </div>
            <div>
              <img className="w-28 " src={care}></img>
            </div>
          </div>
          <div className=" text-left mb-16">
            <p className="flex items-start font-normal mb-3">
              <span className="">
                <TiTick className=" mt-1 text-lg" />
              </span>
              Unlimited consultations with our experienced on duty General
              Physician & Gynaecology Doctors
            </p>
            <p className="flex items-start font-normal">
              <span className="">
                <TiTick className=" mt-1 text-lg" />
              </span>
              Free 4 consultations with specialists in a year
            </p>
          </div>
          <button className="btn btn-primary text-white btn-sm float-left  absolute bottom-4 left-4 ">
            Subscribe now
          </button>
        </div>
        <div
          data-aos="fade-up"
          className="plan card-body hover: hover:opacity-80 p-4 rounded-xl relative card shadow-2xl"
        >
          <div class="flex justify-between  items-start  ">
            <div>
              <h1 className="text-left text-xl text-primary">
                Daktar bari Premium Care
              </h1>
              <p className="text-left">
                <span className="text-xl font-mono">৳ 570 </span>
                <span className="text-sm font-semibold">/month</span>
              </p>
              <p className="text-left font-normal mt-2 mb-6">For 1 adult </p>
            </div>
            <div>
              <img className="w-28 " src={care}></img>
            </div>
          </div>
          <div className=" text-left mb-16">
            <p className="flex items-start font-normal mb-3">
              <span className="">
                <TiTick className=" mt-1 text-lg" />
              </span>
              Unlimited consultations with our experienced on duty General
              Physician & Gynaecology Doctors
            </p>
            <p className="flex items-start font-normal">
              <span className="">
                <TiTick className=" mt-1 text-lg" />
              </span>
              Free 4 consultations with specialists in a year
            </p>
            <p className="flex items-start font-normal">
              <span className="">
                <TiTick className=" mt-1 text-lg" />
              </span>
              ৳ 350,000 cashback on health & life insurance.
            </p>
          </div>
          <button className="btn btn-primary text-white btn-sm float-left  absolute bottom-4 left-4 ">
            Subscribe now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareAndProtectionPlant;
