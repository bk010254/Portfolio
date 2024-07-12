import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                    alt="ocontact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6 className="ContactTitleWithSocial">
                      CONTACT WITH:
                      <a
                        href="https://www.linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsLinkedin
                          color="#0A66C2"
                          size={30}
                          className="ms-2"
                        />
                      </a>
                      <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub color="black" size={30} className="ms-2" />
                      </a>
                      <a
                        href="https://www.instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsInstagram
                          color="#E4405F"
                          size={30}
                          className="ms-2"
                        />
                      </a>
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      style={{ height: 120 }}
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button">SEND MESSAGE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
