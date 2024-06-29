import React from 'react';
import "./assets/HomeContent.css";

const HomeContent = () => {
    return (
        <div className="content">
            <div className="text-content">
                <p>Are you hungry?</p>
                <h1>Don't Wait !</h1>
                <a href="/menu"><button>Order Now</button></a>
            </div>
            <div className="img-content">
                <img src="/Pizza_img.png" alt="Pizza" />
            </div>
        </div>
    );
}

export default HomeContent;
