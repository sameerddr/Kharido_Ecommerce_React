import React from "react";
import { NavLink } from "react-router-dom";
import "./Errorpage.css";

const Errorpage = () => {
  return (
    <>
      <div className="error">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <button>Go Back to Home</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
