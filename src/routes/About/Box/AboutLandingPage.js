import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const AboutLandingPage = () => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  return (
    <div className="landing-page">
      <div className="img-container">
        <img src={require("../../../Images/about-landing-page.jpg")} alt="" />
          <img
            data-aos="fade"
            data-aos-duration={500}
            data-aos-offset="100"
            className="img-abs"
            src={require("../../../Images/about-1.png")}
            alt=""
          />
      </div>
    </div>
  );
};

export default AboutLandingPage;
