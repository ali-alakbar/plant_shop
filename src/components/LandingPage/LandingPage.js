import React, { useEffect } from "react";
import "./style/style.css";
import Data from "../../JSON/Data.json";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";

const LandingPage = () => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  const { landingPage } = Data;
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="landing-page-section-wapper">
      {/* The rotated text */}
      <div className="text-rotate-img-container">
        <img src={require("./media/text-rotate.png")} alt="" />
      </div>
      {/* Rest of the content */}
      <AutoplaySlider play={true} interval={6000} organicArrows={false}>
        {landingPage.map((item, id) => {
          return (
            <div key={id} className="landing-page-section">
              <div
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-offset="100"
                className="img-container"
              >
                <img src={require(`${item.img}`)} alt="" />
              </div>
              <div className="other-content">
                <h2
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-offset="100"
                >
                  {item.h2_one} <br /> {item.h2_two} <span>{item.h2_span}</span>
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-offset="100"
                >
                  {item.p_one}
                  <br />
                  {item.p_two}
                </p>
                <NavLink
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="10"
                  to={"#"}
                >
                  Discover
                </NavLink>
              </div>
            </div>
          );
        })}
      </AutoplaySlider>
      ;
    </div>
  );
};

export default LandingPage;
