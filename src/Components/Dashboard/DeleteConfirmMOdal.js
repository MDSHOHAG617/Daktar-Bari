import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmMOdal = ({ deletingProducts, setDeletingProducts }) => {
  const handleDelete = () => {
    fetch(`http://localhost:5000/medicine/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast(`Products : ${name} is deleted`);
          setDeletingProducts(null);
        }
      });
  };
  const { name, email } = deletingProducts;
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal  modal-middle">
        <div class="modal-box">
          <h3 class="font-bold  ">
            Are you sure you want to delete?{" "}
            <span className="text-[#07C0BA]">{name}</span>
          </h3>
          <p class="py-3 px-16 font-mono text-red-400">
            Once if you delete the medicine it won't be able to restore!
          </p>
          <div class="modal-action">
            <button
              onClick={() => handleDelete()}
              className=" btn btn-sm bg-[#f70000] border-0 text-white hover:bg-[#f70000]"
            >
              Confirm Delete
            </button>
            <label
              for="delete-confirm-modal"
              class="btn hover:bg-[#07C0BA]  btn-sm bg-[#07C0BA] text-white border-0"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmMOdal;
