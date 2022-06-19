import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Data from "../../JSON/Data.json";
import "./style/style.css";
const BrandLogo = () => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  const { brandLogo } = Data;

  return (
    <div className="brand-logo container">
      {brandLogo.map((item, index) => {
        return (
          <div
            data-aos="fade-up"
            data-aos-duration={item.duration}
            data-aos-offset="100"
            key={index}
            className="img-container"
          >
            <img src={require(`../../Images/${item.img}`)} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default BrandLogo;
