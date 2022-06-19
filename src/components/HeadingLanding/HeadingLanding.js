import React from "react";
import "./style/style.css";
import AliceSlider from "./Box/AliceSlider";
import { NavLink } from "react-router-dom";

const HeadingLanding = (props) => {
  return (
    <div className="heading-landing">
      <div className="container">
        <h1 className="heading">{props.title}</h1>
        <span style={{ display: props.isThereList ? "block" : "none" }}>
          <AliceSlider />
        </span>
        <div className="path">
            <NavLink to={"/Home"}>Home</NavLink>{" > "} {props.title}
        </div>
      </div>
    </div>
  );
};

export default HeadingLanding;
