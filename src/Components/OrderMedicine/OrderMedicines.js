import React from "react";

const OrderMedicines = ({ medicine }) => {
  console.log(medicine);
  return (
    <div className="mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className=" w-48" src={medicine.img} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{medicine.name}</h2>
          <p className="font-normal text-justify">{medicine.desc}</p>
          <div className="btn btn-primary text-white justify-center">
            <div className="">Buy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMedicines;
