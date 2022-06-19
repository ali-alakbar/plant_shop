import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { NavLink } from "react-router-dom";
import "./style/style.css";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoSection = () => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  return (
    <section className="video-section">
      <div className="container">
        <div
          className="left-side"
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-offset="130"
        >
          <a
            // For Fading on Scrolling
            href="https://www.Youtube.com"
            className="icon-container"
          >
            <FontAwesomeIcon icon={faPlay} />
          </a>
          <img src={require("./media/banner-video.jpg")} alt="" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-offset="160"
          className="right-side"
        >
          <h2>LIFE GATHERS AROUND PLANTS</h2>
          <h1>
            A Houseplant’s Journey <span>Home</span>
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            Praesent egestas tristique nibh. Sed mollis, eros et ultrices tempus
            mauris ipsumaliquam libero, non adipiscing dolor urna a orci. Fusce
            convallis metus id felis luctus adipiscing. Integer tincidunt.
          </p>
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-offset="100"
          >
            <NavLink to={"#"}>My strory</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
