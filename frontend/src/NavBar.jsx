import React from 'react';
import "./assets/NavBar.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Flip, toast } from 'react-toastify';

const NavBar = ({ Nos, isLoggedIn, setIsLoggedIn, clearCartItems }) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 1500));
        toast.promise(
            resolveAfter3Sec,
            {
              pending: 'Logging Out...',
              success: 'Log Out successfully!',
            },
            {
              position: "top-center",
              autoClose: 1000,
              pauseOnHover: false,
              transition: Flip,
              hideProgressBar: true,
            }
          ).then(() => {
            setIsLoggedIn(false);
            clearCartItems();
            history.push('/');
          })
  };

  return (
    <header>
      <nav>
        <div className="nav-left">
          <a onClick={() => history.push("/")}><img src="/Fizza_logo.png" className="pizza-img" alt="Pizza" /></a>
          <h3 className="title">F ! Z Z A</h3>
        </div>
        <div className="nav-right">
          <ul>
            <li><a onClick={() => history.push("/menu")}>Menu</a></li>
            <li><a onClick={() => history.push("/offers")}>Offers</a></li>
            {isLoggedIn ? (
              <>
                <li><a onClick={() => history.push("/orders")}>Orders</a></li>
                <li><a onClick={handleLogout}>Logout</a></li>
              </>
            ) : (
              <>
                <li><a onClick={() => history.push("/register")}>Register</a></li>
                <li><a onClick={() => history.push("/login")}>Login</a></li>
              </>
            )}
            <li><a onClick={() => history.push("/cart")}><i className="fa-solid fa-cart-shopping"></i><span className='num-of-items'>{Nos}</span></a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
