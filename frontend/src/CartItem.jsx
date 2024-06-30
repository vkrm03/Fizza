import React, { useContext, useEffect, useState } from "react";
import "./assets/CartItem.css";
import { Flip, toast } from 'react-toastify';
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { link } from "../public/address";

function CartItems({cartItems, clearCartItems, isLoggedIn }) {
    const [address, setAddress] = useState("");
    const [phn, setPhone] = useState("");
    const history = useHistory();
    function handleClick(event) {
        event.preventDefault();
        const resolveAfter1_5Sec = new Promise(async (resolve, reject) => {
            try {
              const userId = localStorage.getItem('userId');
                if (isLoggedIn) {
                  try {
                    const response = await axios.post(`http://${link}:5000/cart`, {
                      Address: address,
                      Phone: phn,
                      items: cartItems,
                      userId: userId
                    }
                    );

                    if (response.status === 200) {
                        resolve();
                      }
                    } catch (error) {
                      reject(new Error("Error"));
                    }
                } else {
                    reject(new Error("Please Login to Order"));
                    }
                  } catch (error) {
                  reject(new Error("An Error Occured"));
                }
            });
      
          toast.promise(
            resolveAfter1_5Sec,
            {
              pending: 'Ordering...',
              success: 'Ordered successfully!',
              error: {
                render({ data }) {
                  return data.message;
                },
              },
            },
            {
              position: "top-center",
              autoClose: 1000,
              pauseOnHover: false,
              transition: Flip,
              hideProgressBar: true,
            }
          ).then(() => {
            clearCartItems();
            history.push('/orders');
          })






    }

    const totalAmount = cartItems.reduce((total, item) => total + parseInt(item.price.replace('₹', '')), 0);
    return (
        <div className="cart">
            <div className="cart-items">
                <h1><i className="fa-solid fa-cart-shopping"></i> Order Summary</h1>
                {cartItems.map((item, index) => (
                    <div className="items" key={index}>
                        <img src={item.src} alt={item.pizzaName} />
                        <h2>{item.pizzaName}</h2>
                        <p>Quantity: {item.quantity}</p>
                        <p>Size: {item.size }</p>
                        <p>Prize: {item.price}</p>
                    </div>
                ))}
                <div>
                    <h2 className="amt">Total Amount: ₹{totalAmount}</h2>
                    <form action="/cart" onSubmit={handleClick} method="POST">
                    <div className="form-container">
                    <input type="text" placeholder="Phone" className="inputs" value={phn}  onChange={(e) => setPhone(e.target.value)} required/> <br />
                    <input type="text" placeholder="Address" className="inputs" value={address}  onChange={(e) => setAddress(e.target.value)} required/><br />
                    </div>
                    <button type="submit">Order Now</button>
                    </form>
                    
                </div>
            </div>
        </div>
    );
}

export default CartItems;
