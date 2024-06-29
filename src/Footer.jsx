import React from "react";
import "./assets/Footer.css"

function Footer() {
    return(
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo">
            <span className="logo-text">F ! Z Z A</span>
          </h2>
          <p>Order your favourite pizza now.</p>
        </div>
        <div className="footer-section links">
          <h2>Links</h2>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: contact@f!zza.com</li>
          </ul>
        </div>
      </div>
      <p className="footer-bottom-text">&copy; 2024 Vikram A . All rights reserved.</p>
    </footer>
      )
}

export default Footer;