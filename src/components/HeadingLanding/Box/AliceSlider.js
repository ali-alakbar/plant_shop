import React from "react";
import Data from "../../../JSON/Data.json";
// Importing Alice Slider and Alice slider css
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const AliceSlider = () => {
  // Array of obj data from json file to map through
  const { headingLanding } = Data;
  return (
    <div className="other-content">
      {/* Applying Alice Slider */}
      <AliceCarousel
        disableButtonsControls={true}
        disableDotsControls={true}
        autoPlay={true}
        autoPlayInterval={1600}
        responsive={{
          0: {
            items: 3,
          },
          1024: {
            items: 5,
          },
          992: {
            items: 4,
          },
        }}
        infinite
        paddingLeft={40}
        paddingRight={0}
        mouseTracking
      >
        {/* A function to map through the JSON obj data and return the a box tag */}
        {headingLanding.map((item, index) => {
          return (
            <div key={index} className="box">
              <div className="img-container">
                <img src={require(`../media/${item.img}`)} alt="" />
              </div>
              <div className="title">
                <h3>{item.title}</h3>
              </div>
            </div>
          );
        })}
      </AliceCarousel>
    </div>
  );
};

export default AliceSlider;
