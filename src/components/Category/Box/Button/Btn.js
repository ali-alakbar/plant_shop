import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";


const Btn = (props) => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  return (
    <div className="link-container">
      <NavLink
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-offset="110"
        to=""
      >
        {props.title} <FontAwesomeIcon icon={faArrowRight} />
      </NavLink>
    </div>
  );
};

export default Btn;
