import React from "react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa"; // You may already have this imported

const MernStackicon = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <SiMongodb size={20} style={{ margin: "0 5px", color: "#47A248" }} />{" "}
      {/* MongoDB green */}
      <SiExpress size={20} style={{ margin: "0 5px", color: "#000000" }} />{" "}
      {/* Express black */}
      <SiReact size={20} style={{ margin: "0 5px", color: "#61DAFB" }} />{" "}
      {/* React blue */}
      <SiNodedotjs
        size={20}
        style={{ margin: "0 5px", color: "#339933" }}
      />{" "}
      {/* Node.js green */}
    </div>
  );
};

export default MernStackicon;
