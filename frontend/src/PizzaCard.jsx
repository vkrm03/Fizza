import React, { useState } from "react";
import { Bounce, Flip, Slide, Zoom, toast } from 'react-toastify';

function PizzaCard({ src, pizzaName, size, price, addToCart }) {
    const handleClick = () => {
        addToCart({ src, pizzaName, size, price });
        toast.success("Pizza added to cart successfully!", {
            autoClose: 100,
            pauseOnHover: false,
            transition: Slide,
            hideProgressBar: true,
        });
    };
    
    return (
        <div className="card">
            <img src={src} alt="pizza" />
            <h2>{pizzaName}</h2>
            <p>{size}</p>
            <p>{price}</p>
            <button onClick={handleClick}>+ Add</button>
        </div>
    );
}

export default PizzaCard;
