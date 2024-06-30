import React, { useState } from "react";
import "./assets/Form.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Flip, toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from 'axios';

function RegisterForm({ totalQuantity }) {
  const [formData, setFormData] = useState({
    usrName: "",
    passWord: "",
    confirmPassword: "",
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
        e.preventDefault();

        const resolveAfter1_5Sec = new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://192.168.6.134:5000/register', {Email: formData.usrName,Password: formData.passWord});
                if (response.status === 200) {
                    resolve();
                  } else {
                    reject();
                  }
                } catch (error) {
                  reject();
                }
            });
      
          toast.promise(
            resolveAfter1_5Sec,
            {
              pending: 'Registering Account',
              success: 'Account Registered successfully!',
              error: 'Account Already Registered',
            },
            {
              position: "top-center",
              autoClose: 3000,
              pauseOnHover: false,
              transition: Flip,
              hideProgressBar: true,
            }
          ).then(() => {
            history.push('/login');
          })
  };

  return (
    <div>
      <div className="center-div">
        <div className="login-form">
          <form action="/register" onSubmit={handleSubmit} method="POST">
            <div className="form-group">
              <label htmlFor="usrName">
                <i className="fas fa-envelope"></i> Email
              </label>
              <input
                type="email"
                placeholder="Email"
                name="usrName"
                value={formData.usrName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="passWord">
                <i className="fas fa-lock"></i> Password
              </label>
              <input
                type="password"
                placeholder="Password"
                name="passWord"
                value={formData.passWord}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">
                <i className="fas fa-lock"></i> Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterForm;
