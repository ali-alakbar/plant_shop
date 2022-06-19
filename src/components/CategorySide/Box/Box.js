// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

  // A Component To Show The Category of plants 
function Box(props) {

  return (
    <div className="plant-content">
      <div className="left">(9)</div>
      <div className="right">
        <NavLink to={"/"}>
          {/* <FontAwesomeIcon icon={props.icon} /> */}
          {props.plantName}
        </NavLink>
      </div>
    </div>
  );
}

export default Box;
