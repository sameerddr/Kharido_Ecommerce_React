import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import { useAuth0 } from "@auth0/auth0-react";

import "./Navbar.css";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <>
      <div className="navbar">
        <div>
          <h1 className="logo">Kharido</h1>
        </div>
        <ul className="navbar-lists">
          <div className="nav-list2">
            <li>
              <NavLink to="/" className="navbar-link home-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navbar-link ">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className="navbar-link ">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navbar-link ">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="navbar-link cart-trolley--link">
                <FiShoppingCart className="cart-trolley" />
              </NavLink>
            </li>
            {isAuthenticated && (
              <li>
                <p className="username">Hi ,{user.name}</p>
              </li>
            )}
            {isAuthenticated ? (
              <li>
                <button
                  className="button-60"
                  onClick={() => logout({ returnTo: window.location.origin })}>
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button
                  className="button-60"
                  onClick={() => loginWithRedirect()}>
                  Log In
                </button>
                ;
              </li>
            )}
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
