import React from "react";
import "./assets/Offer.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Offer({totalQuantity}) {
    return (
        <div>
        <div className="offer-container">
            <img
                className="offer-image"
                src="https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/hut125.5893dee123b1a79e089241a83f936067.1.jpg"
                alt="Offer 1"
            />
            <img
                className="offer-image"
                src="https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/hut300.25d8a775409b50ec421e1bfb74be6937.1.jpg"
                alt="Offer 2"
            />
        </div>
        <Footer />
        </div>
    );
}

export default Offer;
