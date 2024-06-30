import React from 'react';
import "./assets/HomeContent.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const HomeContent = () => {
    const history = useHistory();
    return (
        <div className="content">
            <div className="text-content">
                <p>Are you hungry?</p>
                <h1>Don't Wait !</h1>
                <a><button onClick={() => history.push("/menu")}>Order Now</button></a>
            </div>
            <div className="img-content">
                <img src="/Pizza_img.png" alt="Pizza" />
            </div>
        </div>
    );
}

export default HomeContent;
