import React from "react";
import { Link } from "react-router-dom";

const Medicines = ({ medicine }) => {
  // console.log(medicine);
  const {
    _id,
    name,
    img,
    desc,
    min_order_quantity,
    available_quantity,
    price,
  } = medicine;
  return (
    <div className="mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className=" w-48" src={img} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-normal text-justify">{desc}</p>
          {/* <div className="">Buy</div> */}
          <Link to={`/purchase/${_id}`} className="btn btn-primary">
            Purchase
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Medicines;
