import React from "react";
import "./assets/EmptyCart.css"

function EmptyOrder() {
    return (
        <div className="empty-cart">
            <h1>Your Orders is Empty</h1>
            <p>You probably haven't order a pizza yet <br />To order go to Menu.</p>
            <img src="https://png.pngtree.com/png-clipart/20220404/original/pngtree-delivery-man-with-box-in-cartoon-characters-vector-png-image_7513449.png" alt="" />
            <a href="/menu"><button>Go Menu</button></a>
        </div>
    );
}

export default EmptyOrder;