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
    <Link to={`/purchase/${_id}`} className="mx-auto">
      <div className=" flex items-center bg-base-100 shadow-md">
        <figure>
          <img className="w-28 p-2" src={img} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <p className="font-normal text-justify">type: </p>
          <p className="font-normal text-justify">
            best Price: <span className=" text-sm font-extrabold">৳ </span>
            <span className="text-xl font-bold">{price} </span>{" "}
          </p>
          {/* <p className="font-normal text-justify">{desc}</p> */}
          {/* <div className="">Buy</div> */}
          {/* <Link to={`/purchase/${_id}`} className="btn btn-primary">
            Purchase
          </Link> */}
        </div>
      </div>
    </Link>
  );
};

export default Medicines;
