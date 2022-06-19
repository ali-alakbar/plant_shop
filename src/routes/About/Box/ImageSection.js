import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Data from "../../../JSON/Data.json";
import { Parallax } from "react-scroll-parallax";

const ImageSection = () => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  const { images } = Data;
  return (
    <div className="images-grid">
      {images.map((image, index) => {
        return (
          <Parallax translateY={[-10, 10]}>
            <div
              data-aos={`fade-${image.dir}`}
              data-aos-duration={500}
              data-aos-offset="100"
              key={index}
              className="img-container"
            >
              <img src={require(`../../../Images/${image.img}`)} alt="" />
            </div>
          </Parallax>
        );
      })}
    </div>
  );
};

export default ImageSection;
