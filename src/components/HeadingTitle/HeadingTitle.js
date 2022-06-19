import React, { useEffect } from "react";
import "./style/style.css";
import "aos/dist/aos.css";
import Aos from "aos";


const HeadingTitle = (props) => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="600"
      data-aos-offset="120"
      className="heading-title"
    >
      <h2>{props.title}</h2>
      <div className="img-container"></div>
    </div>
  );
};

export default HeadingTitle;
