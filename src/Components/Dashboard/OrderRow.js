import React from "react";
import { toast } from "react-toastify";

const OrdersRow = ({ order, index, setDeletingProducts }) => {
  const { name, img, price, email } = order;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class=" avatar sm:w-12 lg:w-20 rounded">
          <img src={img} alt="" />
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <label
          onClick={() => setDeletingProducts(order)}
          for="delete-confirm-modal"
        >
          <img
            className="w-8"
            src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
            alt=""
          />
        </label>
      </td>
    </tr>
  );
};

export default OrdersRow;
