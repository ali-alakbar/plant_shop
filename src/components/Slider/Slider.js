import React, { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Data from "../../JSON/Data.json";
import "aos/dist/aos.css";
import Aos from "aos";
import "./style/style.css";
import Rating from "@mui/material/Rating";
const Slider = () => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const { quote } = Data;
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="600"
      data-aos-offset="220"
      className="right-side"
    >
      <AutoplaySlider play={true} interval={6000} organicArrows={false}>
        {quote.map((item, id) => {
          return (
            <div key={id} className="content">
              <q>{item.q}</q>
              <p>{item.name}</p>
              <Rating name="disabled" color="" value={item.rating} readOnly />
            </div>
          );
        })}
      </AutoplaySlider>
    </div>
  );
};

export default Slider;
