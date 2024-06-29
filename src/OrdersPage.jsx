import React from "react";
import { useHistory } from "react-router-dom";
import "../src/assets/OrdersPage.css";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function OrdersPage({ orders }) {
  const history = useHistory();

  const handleOrderClick = (orderId) => {
    history.push(`/orders/${orderId}`)
  };

  return (
    <div className="centered-div">
      <div className="data-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td className={`order-id ${order.Status === "Delivered" ? "strike" : ""}`} onClick={() => handleOrderClick(order._id)}>
                  {order._id}
                </td>
                <td>{order.Phone}</td>
                <td>{order.Address}</td>
                <td>{order.Ordered_Time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersPage;
