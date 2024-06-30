import React, { useState } from "react";
import "./assets/Form.css"
import Footer from "./Footer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Flip, toast } from "react-toastify";
import axios from "axios";
import { link } from "../public/address";

function LoginForm({setIsLoggedIn, setIsAdmin}) {
    const [formData, setFormData] = useState({
        usrName: "",
        PassWord: "",
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
                const response = await axios.post(`${link}/login`, {Email: formData.usrName,Password: formData.PassWord});
                if (response.status === 200) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('userId', response.data.id);
                    if (response.data.id === "668174831af6eca40739c400") {
                      setIsAdmin(true)
                      localStorage.setItem('isAdmin', true);
                    } else {
                      setIsAdmin(false)
                      localStorage.setItem('isAdmin', false);
                    }
                    setIsLoggedIn(true);
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
              pending: 'Logging To Account',
              success: 'Log In successfully!',
              error: 'Password does not match.',
            },
            {
              position: "top-center",
              autoClose: 3000,
              pauseOnHover: false,
              transition: Flip,
              hideProgressBar: true,
            }
          ).then(() => {
            history.push('/');
          })
    }




    return (
        <div>
        <div className="center-div">
            <div className="login-form">
            <form action="/login" onSubmit={handleSubmit} method="POST">
                <div className="form-group">
                    <label htmlFor="username"><i className="fas fa-envelope"></i> Email</label>
                    <input type="email" placeholder="Email" name="usrName" value={formData.usrName} onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
                    <input type="password" placeholder="Password" name="PassWord" value={formData.PassWord} onChange={handleInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
        </div>
        <Footer />
        </div>
    );
}

export default LoginForm;
