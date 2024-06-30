import React, { useEffect, useState } from "react";
import axios from "axios";
import EmptyOrder from "./EmptyOrders";
import OrdersPage from "./OrdersPage";
import Footer from "./Footer";
import { link } from "../public/address";

function Orders() {

    const [orders, setOrders] = useState([]);
    const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
          console.log("from" + userId)
        const response = await axios.get(`${link}/order/${userId}`);
        if (response.status === 200) {
          setOrders(response.data);
        } else {
          console.log("Failed to fetch orders:", response);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    if (userId) {
      fetchOrders();
    }
  }, [userId]);


    return (
        <div>
            {orders.length === 0 ? <EmptyOrder /> : <OrdersPage orders={orders}/>}
            <Footer />
        </div>
    );
}

export default Orders;
