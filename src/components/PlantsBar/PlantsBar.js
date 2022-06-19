import React, { useEffect } from "react";
import "./style/style.css";
import Data from "../../JSON/Data.json";
import "aos/dist/aos.css";
import Aos from "aos";


const PlantsBar = () => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  const { plantsBar } = Data;
  return (
    <section className="plants-bar-section">
      <div className="container">
        {plantsBar.map((item, id) => {
          return (
            <div
              data-aos="fade-down"
              data-aos-duration={item.duration}
              data-aos-offset="110"
              key={id}
              className="plants-box"
            >
              <div className="img-container">
                <img
                  className="noHover"
                  src={require(`./media/${item.img}`)}
                  alt=""
                />
                <img
                  className="onHover"
                  src={require(`./media/${item.hoverImg}`)}
                  alt=""
                />
              </div>

              <h3>{item.h3}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlantsBar;
