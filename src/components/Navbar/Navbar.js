import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import Button from "../Button";
import { useAuthContext } from "../../util/Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const { user, signout } = useAuthContext();
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const loginStateHandler = () => {
    props.toggleState();
  };

  const handleSignout = () => {
    signout();
    window.location.reload();
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        Emergency App<i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <div>
        {user ? (
          <Link
            to="/"
            className="btn btn--primary btn--large"
            onClick={handleSignout}
          >
            Logout
          </Link>
        ) : props.isLogin ? (
          <Link
            to="/signup"
            className="btn btn--primary btn--large"
            onClick={loginStateHandler}
          >
            Create Account
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn btn--primary btn--large"
            onClick={loginStateHandler}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
