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
    <Link to={`/purchase/${_id}`} className="mx-auto ">
      <div className=" flex items-center shadow-md h-full w-96 lg:w-72 rounded-md ">
        <figure>
          <img className="p-4 lg:p-0" src={img} />
        </figure>
        <div className="card-body ">
          <h2 className=" font-normal">{name}</h2>

          {/* <p className="font-normal text-justify">description: {desc} </p> */}
          <p className="font-normal text-justify">
            <span className=" text-sm font-extrabold">৳ </span>
            <span className="text-sm font-normal">{price} </span>{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Medicines;
