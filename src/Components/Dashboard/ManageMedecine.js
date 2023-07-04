import React, { useEffect, useState } from "react";
import DeleteConfirmMOdal from "./DeleteConfirmMOdal";
import OrdersRow from "./OrderRow";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const ManageMedicine = () => {
  const [user, loading] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  // console.log(orders);

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
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {/* manage orders : {orders.length} */}
      <div class="overflow-x-auto mt-0 lg:mt-2 ">
        <table class="table w-full">
          <thead>
            <tr>
              <th>NO</th>
              <th>Medicine</th>
              <th>Medicine name</th>
              <th>Added by</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="font-normal">
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
