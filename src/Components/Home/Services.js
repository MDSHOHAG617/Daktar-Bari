import React from "react";

const Services = () => {
  return (
    <div className="mx-16 mt-32 services grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="flex items-start service">
        <img
          className="w-16 mr-6"
          src="https://doctime.com.bd/images/feature/verified__doctors.svg"
        />
        <div className="text-left ">
          <h1 className="text-xl mb-3">Verified doctors</h1>
          <p className="text-md font-normal ">
            Every doctors on Daktar bari platform are BMDC certified. We verify
            relevant information before the doctor can consult any patient.
          </p>
        </div>
      </div>
      <div className="flex items-start service">
        <img
          className="w-16 mr-6 "
          src="https://doctime.com.bd/images/feature/instant__video__consultation.svg"
        />
        <div className="text-left ">
          <h1 className="text-xl mb-3">Instant video consultation</h1>
          <p className="text-md font-normal ">
            Most of our consultations starts within 10 minutes of making
            payment. The video call is secured by 256 bit encryption
          </p>
        </div>
      </div>
      <div className="flex items-start service">
        <img
          className="w-16  mr-6"
          src="https://doctime.com.bd/images/feature/Instant_electronics_prescription.svg"
        />
        <div className="text-left ">
          <h1 className="text-xl mb-3">Instant electronics prescription</h1>
          <p className="text-md font-normal ">
            As soon as the consultation is complete, doctor will provide the
            electronic prescription for the patient to download instantly or
            later.
          </p>
        </div>
      </div>
      <div className="flex items-start service">
        <img
          className="w-16  mr-6"
          src="https://doctime.com.bd/images/feature/easy__payment.svg"
        />
        <div className="text-left ">
          <h1 className="text-xl mb-3">Easy payment options</h1>
          <p className="text-md font-normal ">
            Patient can make payment online using our secured payment gateway
            partner by bKash, Rocket, Nagad, debit card, credit cards and many
            more.
          </p>
        </div>
      </div>
      <div className="flex items-start service">
        <img
          className="w-16 mr-6 "
          src="https://doctime.com.bd/images/feature/better__consultation__quality.svg"
        />
        <div className="text-left">
          <h1 className="text-xl mb-3">Better consultation quality</h1>
          <p className="text-md font-normal ">
            Our doctors are committed to provide the best service by spending
            enough time required for the consultation. We constantly improve our
            service from the rating and feedback provided by patients.
          </p>
        </div>
      </div>
      <div className="flex items-start service">
        <img
          className="w-16 mr-6 "
          src="https://doctime.com.bd/images/feature/health__history.svg"
        />
        <div className="text-left">
          <h1 className="text-xl mb-3">Health history</h1>
          <p className="text-md font-normal ">
            Patient can get their consultation history and previous prescription
            digitally just in few taps.
          </p>
        </div>
      </div>
      <div className="flex items-start service">
        <img
          className="w-16 mr-6 "
          src="https://doctime.com.bd/images/feature/super__fast__support.svg"
        />
        <div className="text-left">
          <h1 className="text-xl mb-3">Super fast support</h1>
          <p className="text-md font-normal ">
            Our dedicated customer service team is available to assist you
            resolving any issues or answering any queries. We are happy to help.
          </p>
        </div>
      </div>
      <div className="flex items-start service">
        <img
          className="w-16 mr-6 "
          src="https://doctime.com.bd/images/feature/medicine__delivered.svg"
        />
        <div className="text-left">
          <h1 className="text-xl mb-3">Medicine delivered to your doorstep</h1>
          <p className="text-md font-normal ">
            We work very closely with our partners to deliver medicine at your
            doorstep.
          </p>
        </div>
      </div>
      <div className="flex items-start service">
        <img
          className="w-16 mr-6 "
          src="https://doctime.com.bd/images/feature/mobile__reminder.svg"
        />
        <div className="text-left">
          <h1 className="text-xl mb-3">Medicine reminder</h1>
          <p className="text-md font-normal ">
            Do not worry about taking your medicine on time. Daktar bari App
            will remind you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
