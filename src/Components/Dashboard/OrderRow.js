import React from "react";
import { toast } from "react-toastify";
import { RiDeleteBinLine } from "react-icons/ri";

const OrdersRow = ({ order, index, setDeletingProducts }) => {
  const { name, img, price, email } = order;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class=" avatar w-20  rounded">
          <img className="" src={img} alt="" />
        </div>
      </td>
      <td>{name}</td>

      <td>{email}</td>
      <td>{price}</td>
      <td>
        <label
          onClick={() => setDeletingProducts(order)}
          for="delete-confirm-modal"
        >
          <RiDeleteBinLine className="text-xl text-error" />
        </label>
      </td>
    </tr>
  );
};

export default OrdersRow;
