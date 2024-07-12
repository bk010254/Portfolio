import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
          <img
            src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?size=626&ext=jpg&ga=GA1.1.2086084361.1717839440&semt=sph"
            alt="Profile-pic"
          />
        </div>

        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eos
            nihil non itaque? Labore doloremque accusantium deleniti laboriosam
            autem, eos repellendus animi aliquam commodi expedita, dolorem
            deserunt eligendi exercitationem error! nihil non itaque? Labore
            doloremque accusantium deleniti laboriosam autem, eos repellendus
            animi aliquam commodi expedita, dolorem deserunt eligendi
            exercitationem error! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quaerat eos nihil non itaque? Labore doloremque
            accusantium deleniti laboriosam autem, eos repellendus animi aliquam
            commodi expedita, dolorem deserunt eligendi exercitationem error!
            nihil non itaque? Labore doloremque accusantium deleniti laboriosam
            autem, eos repellendus animi aliquam commodi expedita, dolorem
            deserunt eligendi exercitationem error!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
