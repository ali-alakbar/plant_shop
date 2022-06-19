import { faAngleDown, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style/style.css"

const SideOne = (props) => {
  const [state, setState] = useState(false);
  // ===================
  // Start a function to display sub links
  // ===================
  const subLinks = () => {
    return (
      <ul style={{ display: state ? "grid" : "none" }} className="subLinks">
        <li className="label">
            <h2>Pages</h2>
        </li>
        <li>
          <NavLink className={"contact-link"} to={"/Contact"}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className={"about-link"} to={"/About"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={"aaq-link"} to={"/FAQ"}>
            FAQ
          </NavLink>
        </li>
      </ul>
    );
  };
  // ===================
  // End a function to display sub links
  // ===================
  return (
    <ul>
      {/* This onclick is to hide sidebar */}
      <li onClick={() => props.newSetState(false)} className="icon-container">
        Close <FontAwesomeIcon className={"closeBars"} icon={faClose} />
      </li>
      <li>
        <NavLink className={"home-link"} to={"/Home"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"shop-link"} to={"/Shop"}>
          Shop
        </NavLink>
      </li>
      <li className={"pages-link"}>
        <NavLink
        // This onclick is to show sub links
          onClick={() => {
            setState(!state);
          }}
          className={"pages-link"}
          to={"#"}
        >
          Pages
          <FontAwesomeIcon className="arrow-icon" icon={faAngleDown} />
          {subLinks()}
        </NavLink>
      </li>
    </ul>
  );
};

export default SideOne;
