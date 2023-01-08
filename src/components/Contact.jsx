import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div className="form">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/myyaywwy"
              method="POST"
              className="contact-inputs">
              <input
                type="text"
                placeholder="Username"
                name="username"
                required
                autoComplete="off"
              />
              <br /> <br />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <br /> <br />
              <textarea
                name="Message"
                cols="30"
                rows="5"
                required
                autoComplete="off"
                placeholder="Enter you message"></textarea>{" "}
              <br /> <br />
              <input type="submit" value="Send" className="btn" />
            </form>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
