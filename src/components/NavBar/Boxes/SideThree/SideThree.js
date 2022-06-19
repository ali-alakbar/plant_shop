import React from "react";
import { NavLink } from "react-router-dom";
import "./style/style.css"

const SideThree = () => {
  return (
    <div className="logo-container">
      <NavLink to={"/Home"}>
        <img src={require("../../media/logo.png")} alt="" />
      </NavLink>
    </div>
  );
};

export default SideThree;
