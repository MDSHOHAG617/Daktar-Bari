import React, { useEffect, useState } from "react";
import DeleteConfirmMOdal from "./DeleteConfirmMOdal";
import OrdersRow from "./OrderRow";

const ManageMedicine = () => {
  const [orders, setOrders] = useState([]);

  const [deletingProducts, setDeletingProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/medicine", {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  return (
    <div>
      {/* manage orders : {orders.length} */}
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>NO</th>
              <th>Avatar</th>
              <th>Product name</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrdersRow
                key={order._id}
                index={index}
                order={order}
                setDeletingProducts={setDeletingProducts}
              ></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProducts && (
        <DeleteConfirmMOdal
          deletingProducts={deletingProducts}
          setDeletingProducts={setDeletingProducts}
        ></DeleteConfirmMOdal>
      )}
    </div>
  );
};

export default ManageMedicine;
