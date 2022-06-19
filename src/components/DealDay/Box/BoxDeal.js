import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CountdownTimer from "react-component-countdown-timer";
import "aos/dist/aos.css";
import Aos from "aos";

const Box = (props, { id }) => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  const [state, setState] = useState(props.img);
  return (
    <div key={id} className="content-wrapper">
      {/* ======================== */}
      <div className="left-side">
        <div className="img-left">
          <img
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-offset="230"
            src={`${state}`}
            alt=""
          />
        </div>
        <div className="img-container-parent">
          <div
            data-aos="fade-down"
            data-aos-duration="400"
            data-aos-offset="100"
            className="img-container"
          >
            <img
              src={`${props.img}`}
              alt=""
              className="img"
              onClick={() => {
                setState(props.img);
              }}
            />
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-offset="100"
            className="img-container"
          >
            <img
              src={`${props.img2}`}
              alt=""
              className="img"
              onClick={() => {
                setState(props.img2);
              }}
            />
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-offset="100"
            className="img-container"
          >
            <img
              src={`${props.img2}`}
              alt=""
              className="img"
              onClick={() => {
                setState(props.img2);
              }}
            />
          </div>
        </div>
      </div>
      {/* ====================== */}
      <div className="right-side">
        <NavLink
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-offset="100"
          to="#"
        >
          {props.foodTitle}
        </NavLink>
        <p data-aos="fade-left" data-aos-duration="1000" data-aos-offset="100">
          {props.description}
        </p>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="80"
          className="price-container"
        >
          <span
            style={{
              textDecoration:
                props.isSiscount === false ? "auto" : "line-through",
              color: props.isSiscount === false ? "#51a644" : "#999",
              fontWeight: props.isSiscount === false ? "700" : "",
            }}
            className="price"
          >
            ${props.prevPrice}
          </span>{" "}
          <span
            style={{
              display: props.isSiscount === false ? "none" : "inline",
            }}
            className="discounted-price"
          >
            {" "}
            ${props.price.toFixed(1)}
          </span>
        </div>
        <CountdownTimer
        
          className="timer-wrapper"
          size={20}
          labelSize={15}
          count={400}
          showTitle
          border
          noPoints
          color="#51a644"
        />
      </div>
    </div>
  );
};

export default Box;
