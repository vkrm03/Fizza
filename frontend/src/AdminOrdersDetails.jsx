import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./assets/OrderDetails.css";
import { link } from "../public/address";

function AdminOrdersDetails() {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`${link}/orders/${orderId}`);
                console.log(response)
                if (response.status === 200) {
                    const foundOrder = response.data
                    if (foundOrder) {
                        setOrder(foundOrder);
                    }
                }
            } catch (error) {
                console.error("Error fetching order:", error);
            }
        };

        if (orderId) {
            fetchOrder();
        }
    }, [orderId]);

    return (
        <div className="center-cont">
            <div className="order-detail-container">
                <h1>Order Summary <span className='ord-id'>({orderId})</span></h1>
                {order && (
                    <div className="orders-details">
                        <p>User Id: {order.UserId}</p>
                        <p>Phone Number: {order.Phone}</p>
                        <p>Address: {order.Address}</p>
                        <p>Ordered Time: {order.Ordered_Time}</p>
                        <p>Status: {order.Status}</p>
                    </div>
                )}
                {order && (
                    <div className="order-items">
                        {order.Ordered_Items.map((item, index) => (
                            <div key={index} className="order-item">
                                <img src={item.src} alt={item.pizzaName} />
                                <div className="order-item-details">
                                    <h2>{item.pizzaName}</h2>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Size: {item.size}</p>
                                    <p>Price: {item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {order && (
                    <div className="total-amount">
                        <h2>Total Amount: ₹{order.Total_Amount}</h2>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminOrdersDetails;
