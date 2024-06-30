import React, { useEffect, useState } from "react";
import axios from "axios";
import "../src/assets/OrdersPage.css";
import "./assets/Admin.css";
import { link } from "../public/address";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function AdminOrders() {
  let [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${link}/Admin`);
        if (response.status === 200) {
          setOrders(response.data);
        } else {
          console.log("Failed to fetch orders:", response);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = async (e, orderId) => {
    const selectedStatus = e.target.value;
    try {
        const response = await axios.post(`http://${link}:5000/Admin/order`, {orderId:orderId,status:selectedStatus});
        if (response.status === 200) {
            console.log(response);
          }
        } catch (error) {
          console.log("error");
        }

    
  };
  const handleClick = (orderId) => {
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
              <th>Status</th>
              <th>Placed At</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td className={`order-id ${order.Status === "Delivered" ? "strike" : ""}`} onClick={() => handleClick(order._id)}>{order._id}</td>
                <td>{order.Phone}</td>
                <td>{order.Address}</td>
                <td>
                  <select
                    name="status"
                    id="status"
                    defaultValue={order.Status}
                    onChange={(e) => handleStatusChange(e, order._id)}
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Prepared">Prepared</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out of Delivery">Out of Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td>{order.Ordered_Time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminOrders;
