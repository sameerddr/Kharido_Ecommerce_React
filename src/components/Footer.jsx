import React from "react";

import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container ">
          <div className="footer-subscribe">
            <form action="#">
              <input type="email" name="email" placeholder=" E-MAIL" />

              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="footer-social">
            <h5>Follow Us</h5>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a href="" target="_blank">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="last ">
            <p>
              @{new Date().getFullYear()} Baniya Ecoommerce. All Rights Reserved
            </p>
            <div className="fot">
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
