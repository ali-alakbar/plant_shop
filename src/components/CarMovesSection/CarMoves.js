import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import "aos/dist/aos.css";
import Aos from "aos";

import "./style/style.css";
const MovingBike = () => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  const paragraph = `As well known and we are very busy all days advice you. advice you
            to call us of before arriving, so we can guarantee your seat.`;
  return (
    <div className="moving-bike">
      <div className="content-section">
        <div className="content contentOne">
          <h1
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-offset="180"
          >
            Choose what you want, select a pick up time
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            {paragraph}
          </p>
          <NavLink
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-offset="100"
            to={""}
          >
            Order Now
          </NavLink>
        </div>
        <Parallax translateX={[-70, 50]}>
          <div className="bike-section-img">
            <img src={require("./media/bike.png")} alt="" />
          </div>
        </Parallax>
        <div className="content contentTwo">
          <h1
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-offset="180"
          >
            Earn points every time you order online
          </h1>
          <p data-aos="fade-left" data-aos-duration="800" data-aos-offset="100">
            {paragraph}
          </p>
          <NavLink
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-offset="100"
            to={""}
          >
            Order Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MovingBike;
