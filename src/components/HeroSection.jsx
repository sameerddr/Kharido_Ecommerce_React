import React from "react";
import { NavLink } from "react-router-dom";

import "./HeroSection.css";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="hero-section-data">
            <p className="intro">Welcome to </p>
            <h1> {name} </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink to="/product">
              <button>Shop now</button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="https://img.freepik.com/free-vector/store-grocery-shop-building-isolated-white-background_1284-14054.jpg?w=740&t=st=1672848850~exp=1672849450~hmac=543737123a469c8abcbbf72869a2b56b39a624d02e9d5f14202e56e73e175566"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
