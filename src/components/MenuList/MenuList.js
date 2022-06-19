import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "./style/style.css";

const MenuList = (props) => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  return (
    <div className="menu-list-part">
      <h1 data-aos="fade-down" data-aos-duration="500" data-aos-offset="110">
        {props.title}
      </h1>
      <ul>
        <li
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-offset="100"
          onClick={() => {
            props.setFoodName("def");
          }}
        >
          All
        </li>
        <li
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-offset="100"
          onClick={() => {
            props.setFoodName("featured");
          }}
        >
          Featured
        </li>
        <li
          data-aos="fade-down"
          data-aos-duration="700"
          data-aos-offset="100"
          onClick={() => {
            props.setFoodName("latest");
          }}
        >
          Latest
        </li>
        <li
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-offset="100"
          onClick={() => {
            props.setFoodName("best");
          }}
        >
          Best Sellers
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
