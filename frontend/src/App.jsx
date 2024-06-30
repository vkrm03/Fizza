import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import Menuchat from "./Menu";
import Offer from "./Offer";
import RegisterForm from "./Register";
import Orders from "./Orders";
import LoginForm from "./Login";
import Cart from "./Cart";
import NotFound from "./NotFound";
import OrderDetail from "./OrderDetails";
import AdminOrders from "./AdminOrders";
import AdminOrdersDetails from "./AdminOrdersDetails";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true');
    const [cartItems, setCartItems] = useState([]);
    const clearCartItems = () => setCartItems([]);
    var totalQuantity = 0;
    cartItems.forEach((item) => {
        totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    })
    
    useEffect(() => {
        setIsAdmin(localStorage.getItem('isAdmin') === 'true');
    }, []);

    return (
        
        <Router>
            <NavBar Nos={totalQuantity} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} clearCartItems={clearCartItems}/>
            <div>
                <Switch>
                    <Route path="/" exact component={() => <Home/> } />
                    <Route path="/menu" exact component ={() => <Menuchat cartItems={cartItems} setCartItems={setCartItems}/>}/>
                    <Route path="/offers" exact component={() => <Offer/>} />
                    <Route path="/orders" exact render={() => (
                        isLoggedIn ? (isAdmin ? <AdminOrders /> : <Orders />) : <Redirect to="/login" />
                    )} />
                    <Route path="/orders/:orderId" exact render={() => (
                        isLoggedIn ? (isAdmin ? <AdminOrdersDetails /> : <OrderDetail />) : <Redirect to="/login" />
                    )} />
                    <Route path="/register" exact component={() => <RegisterForm/>}/>
                    <Route path="/login" exact component={() => <LoginForm setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin}/>} />
                    <Route path="/cart" exact component={() => <Cart cartItems={cartItems} clearCartItems={clearCartItems} isLoggedIn={isLoggedIn}/>} />
                    <Route component={NotFound} />

                </Switch>
                <ToastContainer />
            </div>
        </Router>
    );
}

export default App;
