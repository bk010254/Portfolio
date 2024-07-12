import React from "react";
import "./Cont.css";

const Cont = () => {
  return (
    <div className="contact-container">
      <div className="contact-image">
        <img
          src="https://img.freepik.com/free-vector/contact-us-background-design_23-2147626815.jpg?size=626&ext=jpg&ga=GA1.1.2086084361.1717839440&semt=ais_hybrid"
          alt="Contact Us"
        />
      </div>
      <div className="contact-form">
        <h2>Contact With ICONS</h2>
        <hr className="divider" />
        <form>
          <input
            type="text"
            placeholder="Enter your Name"
            className="contact-input"
          />
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="contact-input"
          />
          <textarea
            type="text"
            name="msg"
            placeholder="Write your message"
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="contact-button">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cont;
