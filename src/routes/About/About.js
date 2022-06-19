import React from "react";
import HeadingLanding from "../../components/HeadingLanding/HeadingLanding";
import AboutLandingPage from "./Box/AboutLandingPage";
import IntroContent from "./Box/IntroContent";
import "./style/style.css";
import ImageSection from "./Box/ImageSection";
import HowitWorks from "../../components/HowitWorks/HowitWorks";
import Slider from "../../components/Slider/Slider";
import BrandLogo from "../../components/BrandLogo/BrandLogo";
import { ParallaxProvider } from "react-scroll-parallax";

const About = () => {
  return (
    <section className="section about-section">
      <ParallaxProvider>
        <HeadingLanding title={"About"} isThereList={false} />
        <AboutLandingPage />
        <IntroContent />
        <ImageSection />
        <HowitWorks />
        <Slider />
        <BrandLogo />
      </ParallaxProvider>
    </section>
  );
};

export default About;
