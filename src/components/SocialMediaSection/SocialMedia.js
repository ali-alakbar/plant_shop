import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { NavLink } from "react-router-dom";
import "./style/style.css";
import Data from "../../JSON/Data.json";
const SocialMedia = () => {
  const { instaImages } = Data;
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  return (
    <section className="socialMedia-section">
      <div className="socialMedia-section-content">
        <div
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-offset="100"
          className="socialMedia-item"
        >
          <NavLink to="#">
            <h2>@ali2_5akbar</h2>
          </NavLink>
          <p data-aos="fade-down" data-aos-duration="800" data-aos-offset="100">
            My Instagram has a thing for plant stylling. Get inspired!
          </p>
        </div>
        <div className="socialMedia-images">
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-offset="100"
            className="main-img-left"
          >
            <span className="box-hover"></span>
            <img src={require("./media/ig-1.jpg")} alt="" />
          </div>
          <div className="other-img-right">
            {instaImages.map((image, id) => {
              return (
                <div
                  data-aos="fade"
                  data-aos-duration={image.duartion}
                  data-aos-offset="100"
                  key={id}
                  className="img-container"
                >
                  <span className="box-hover"></span>
                  <img src={require(`./media/${image.img}`)} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
