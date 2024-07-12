import React, { useState } from "react";
import HomePage from "../../Pages/Home/HomePage";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import "./Layout.css";
import Menus from "../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icon">
            <p onClick={handleToggle}>
              {toggle ? (
                <RiArrowLeftDoubleFill size={30} />
              ) : (
                <RiArrowRightDoubleFill size={30} />
              )}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <HomePage />
        </div>
      </div>
    </>
  );
};

export default Layout;
