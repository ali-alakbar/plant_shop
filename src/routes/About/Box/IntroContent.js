import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { Parallax } from "react-scroll-parallax";

const IntroContent = () => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  return (
    <Parallax translateY={[-20, 20]}>
      <div className="intro-content container">
        <h2 data-aos="fade-up" data-aos-duration={500} data-aos-offset="100">
          FLACIO photosynthesis STORIES{" "}
        </h2>
        <h1 data-aos="fade-up" data-aos-duration={600} data-aos-offset="100">
          We connect buyers and sellers with suitable, <br /> eco-friendly{" "}
          <span>products</span>
        </h1>
        <p data-aos="fade-up" data-aos-duration={800} data-aos-offset="100">
          Nothing adds more beauty and comfort to our homes and offices than the
          lush flowers and foliage of indoor plants. Bedrooms, bathrooms,
          kitchens, cubicles… There really isn’t a space a houseplant can’t
          enliven. Just add light and water, and you’ve got a growing indoor
          oasis. Bringing plants into your home is aesthetically pleasing and –
          amazingly – plants can offer strong health benefits as well!{" "}
        </p>
      </div>
    </Parallax>
  );
};

export default IntroContent;
