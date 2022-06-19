import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "./style/style.css";
import Data from "../../JSON/Data.json";
const HowitWorks = () => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  const { howitWorksSection } = Data;
  return (
    <div className="how-it-works-section">
      <div className="container">
        <h1 data-aos="fade-up" data-aos-duration={500} data-aos-offset="100">
          Here's how it <span>works</span>
        </h1>
        <div className="other-content">
          {/* **************** */}
          {howitWorksSection.map((item, index) => {
            return (
              <>
                <div
                  data-aos="fade-up"
                  data-aos-duration={item.duration}
                  data-aos-offset="100"
                  key={index}
                  className="box"
                >
                  <div style={{ color: "#224229" }} className="img-container">
                    <img src={require(`../../Images/${item.img}`)} alt="" />
                  </div>
                  <div className="text">{item.text}</div>
                </div>
                  <div
                    key={index}
                    className="img-container arrow-img-container"
                  >
                    <img
                      className={item.toDownArrow ? "" : "reverseImage"}
                      src={require("../../Images/arrow-1.png")}
                      alt="arrow"
                    />
                  </div>
              </>
            );
          })}
          {/* **************** */}
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
