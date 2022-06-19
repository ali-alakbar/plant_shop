import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import LocationSection from "./Box/LocationSection";
import "./style/style.css";
import ContactForm from "./Box/ContactForm";
const Location = () => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  return (
    <div className="location-section">
      <div className="location-container">
        <div
          data-aos="fade-right"
          data-aos-duration={500}
          data-aos-offset="110"
          className="map-container"
        >
          <LocationSection />
        </div>
        <span
          data-aos="fade-left"
          data-aos-duration={500}
          data-aos-offset="110"
        >
          <ContactForm />
        </span>
      </div>
    </div>
  );
};

export default Location;
