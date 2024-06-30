import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./assets/OrderDetails.css";
import { link } from "../public/address";

function OrderDetail() {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`${link}/order/${userId}`);
                if (response.status === 200) {
                    const foundOrder = response.data.find(order => order._id === orderId);
                    if (foundOrder) {
                        setOrder(foundOrder);
                    }
                }
            } catch (error) {
                console.error("Error fetching order:", error);
            }
        };

        if (userId) {
            fetchOrder();
        }
    }, [userId, orderId]);

    return (
        <div className="center-cont">
            <div className="order-detail-container">
                <h1>Track Delivery Status</h1>
                <p className="ordered-id">Order ID: {orderId}</p>
                <div className="progress-bar">
                    <div className={`step ${order && (order.Status === 'Order Placed' || order.Status === 'Prepared' || order.Status === 'Shipped' || order.Status === 'Out of Delivery' || order.Status === 'Delivered') ? 'active' : ''}`}>
                        <span className="icon"><i className="fa-solid fa-clipboard-check"></i></span>
                        <span className="text">Order Placed</span>
                        
                    </div>
                    <div className={`step ${order && (order.Status === 'Prepared' || order.Status === 'Shipped' || order.Status === 'Out of Delivery' || order.Status === 'Delivered') ? 'active' : ''}`}>
                        <span className="icon"><i className="fa-regular fa-circle-check"></i></span>
                        <span className="text">Prepared</span>
                    </div>
                    <div className={`step ${order && (order.Status === 'Shipped' || order.Status === 'Out of Delivery' || order.Status === 'Delivered') ? 'active' : ''}`}>
                        <span className="icon"><i className="fa-solid fa-pizza-slice"></i></span>
                        <span className="text">Shipped</span>
                    </div>
                    <div className={`step ${order && (order.Status === 'Out of Delivery' || order.Status === 'Delivered') ? 'active' : ''}`}>
                        <span className="icon"><i className="fa-solid fa-truck"></i></span>
                        <span className="text">Out of Delivery</span>
                    </div>
                    <div className={`step ${order && order.Status === 'Delivered' ? 'active' : ''}`}>
                        <span className="icon"><i className="fa-solid fa-thumbs-up"></i></span>
                        <span className="text">Delivered</span>
                    </div>
                </div>

                <h1>Order Summary</h1>
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

export default OrderDetail;
