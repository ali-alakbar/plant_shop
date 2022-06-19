import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "./style/style.css";
import Slider from "../Slider/Slider";

const Quotes = () => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  return (
    <section className="quote-section">
      <div className="container">
        <div
          className="left-side"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-offset="130"
        >
          <img
            src={require("./media/text-rotate2.png")}
            alt=""
            className="png-rotate"
          />
          <img src={require("./media/img-1.jpg")} alt="" className="main-bg" />
          <img
            src={require("./media/img-2.png")}
            alt=""
            className="second-bg"
          />
        </div>
        
          <Slider />
        
      </div>
    </section>
  );
};

export default Quotes;
