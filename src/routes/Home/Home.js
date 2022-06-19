import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import CarMoves from "../../components/CarMovesSection/CarMoves";
import Category from "../../components/Category/Category";
import DealofDay from "../../components/DealDay/DealofDay";
import DeliverySection from "../../components/DesliveryInfoSection/DeliverySection";
import LandingPage from "../../components/LandingPage/LandingPage";
import PlantsBar from "../../components/PlantsBar/PlantsBar";
import Products from "../../components/Products/Products";
import Quotes from "../../components/QuoteSection/Quotes";
import SocialMedia from "../../components/SocialMediaSection/SocialMedia";
import Support from "../../components/Support/Support";
import VideoSection from "../../components/VideoSection/VideoSection";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";

const Home = (props) => {

  return (
    <section className="section home-section">
      <ParallaxProvider>
        <LandingPage />
        <PlantsBar />
        <Category cart={props.cart} onAdd={props.onAdd} />
        <Quotes />
        <VideoSection />
        <Products cart={props.cart} onAdd={props.onAdd} />
        <CarMoves />
        <DealofDay />
        <Support/>
        <WelcomeSection />
        <DeliverySection />
        <SocialMedia />
      </ParallaxProvider>
    </section>
  );
};

export default Home;
