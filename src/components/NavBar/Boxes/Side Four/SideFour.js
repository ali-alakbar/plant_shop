import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/style.css";
const SideFour = (props) => {

  return (
    <div className="side-4">
      <FontAwesomeIcon
        onClick={() => props.setState(!props.state)}
        className="bars"
        icon={faBars}
      />
    </div>
  );
};

export default SideFour;
