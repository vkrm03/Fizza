import React from "react";
import "./assets/Subcontent.css";
import { Flip, toast } from 'react-toastify';

function Subcontent() {
  const history = useHistory();

  return (
    <div className="containers">
      <div className="main-contents">
        <div className="text-contents">
          <h1>Fastest Delivery<br />Easy Pickup</h1>
          <p className="subtext">When You Are Too Lazy To Cook, We Are Here For You</p>
          <a onClick={() => history.push("/offers")}><button> Get Offers</button></a>
          <div className="stats">
            <div className="stat-item">
              <h2>2500+</h2>
              <p>Successful Delivery</p>
            </div>
            <div className="stat-item">
              <h2>1800+</h2>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h2>1200+</h2>
              <p>Good Client Reviews</p>
            </div>
          </div>
        </div>
        <div className="image-contents">
          <img className="delivery-man" src="https://png.pngtree.com/png-clipart/20230103/original/pngtree-a-pizza-delivery-man-driving-red-motorcycle-cartoon-vector-png-image_8864251.png" alt="Delivery Man" />
        </div>
      </div>
    </div>
  );
}

export default Subcontent;
