import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { NavLink } from "react-router-dom";
import "./style/style.css";
const WelcomeSection = () => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  return (
    <section className="welcome-section">
      <div className="container">
        <div className="content">
          <h2
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-offset="100"
          >
            Welcome To Ali Store
          </h2>
          <h1
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-offset="100"
          >
            Seasonable Plant
          </h1>
          <p data-aos="fade-down" data-aos-duration="800" data-aos-offset="100">
            Flat 20% off All type plant & Accessories
          </p>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-offset="100"
          >
            <NavLink to={"/Shop"}>Shop now!</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
