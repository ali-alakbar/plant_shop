import React from "react";
import RemoveSideBar from "../RemovingSideBarFunction/RemoveSideBar";
import "./style/style.css";

const CloseIcon = () => {
  return (
    <span
      id="customIcon"
      // ****************
      onClick={() => {
        RemoveSideBar();
      }}
      // ****************
      className="custom-icon-container"
    >
      <span className="custom-icon line-one"></span>
      <span className="custom-icon line-two"></span>
    </span>
  );
};

export default CloseIcon;
