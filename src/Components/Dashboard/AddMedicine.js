import React from "react";
import { toast } from "react-toastify";

const AddMedicine = () => {
  const handleAddItems = (event) => {
    event.preventDefault();
    const img = event.target.url.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const price = event.target.price.value;
    const min_order_quantity = event.target.Quantity.value;
    const available_quantity = event.target.supplier.value;
    const desc = event.target.description.value;
    // console.log(img, name, price, min_order_quantity, available_quantity, desc);

    const Items = {
      img,
      name,
      price,
      email,
      min_order_quantity,
      available_quantity,
      desc,
    };

    fetch("http://localhost:5000/medicine", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(Items),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product added successfully");
      });
  };
  return (
    <div className="my-16">
      <form onSubmit={handleAddItems}>
        <div class="card flex-shrink-0 w-full max-w-sm lg:max-w-md  shadow-2xl  mx-auto">
          <div class="card-body">
            <h2 className=" text-xl mb-4">Add medicine</h2>
            <input
              className="text-xs w-50 font-normal input input-sm input-bordered rounded"
              required
              type="email"
              placeholder="Insert your email"
              name="email"
            />
            <input
              className="text-xs w-50 font-normal input input-sm input-bordered rounded"
              required
              type="url"
              placeholder="Insert Product img url"
              name="url"
            />

            <input
              className="text-xs w-50 font-normal input input-sm input-bordered rounded"
              type="text"
              required
              placeholder="Insert Product Name"
              name="name"
            />
            <input
              className="text-xs w-50 font-normal input input-sm input-bordered rounded"
              type="number"
              required
              placeholder="Insert Price"
              name="price"
            />
            <input
              className="text-xs w-50 font-normal input input-sm input-bordered rounded"
              type="number"
              required
              placeholder="Insert Min. Order quantity"
              name="Quantity"
            />
            <input
              className="text-xs w-50 font-normal input input-sm input-bordered rounded"
              type="number"
              required
              placeholder="Insert available_quantity"
              name="supplier"
            />
            <input
              className="text-xs w-50 font-normal input input-sm input-bordered rounded"
              type="text"
              required
              placeholder="Product description"
              name="description"
            />
            <input
              className="btn btn-primary text-white border-none mt-3"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMedicine;
