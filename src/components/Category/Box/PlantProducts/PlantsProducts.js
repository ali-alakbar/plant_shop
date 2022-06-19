import React, { useEffect } from "react";
import "./style/style.css";
import Data from "../../../../JSON/Data.json";
import "aos/dist/aos.css";
import Aos from "aos";

const PlantsProducts = () => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  const { plantsProducts } = Data;
  return (
    <div className="other-details">
      <div
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-offset="120"
        className="left-side"
      >
        <img src={require("../../media/category-banner.webp")} alt="" />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-offset="120"
        className="right-side"
      >
        {plantsProducts.map((item, id) => {
          return (
            <div key={id} className="img-container">
              <img src={require(`../../${item.img}`)} alt="" />
              <h3>{item.h3}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlantsProducts;
