import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Box from "./Box";

function FooterSectionOne() {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  return (
    <div className="footer-section-one">
      {/* <Logo /> */}
      <div
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-offset="100"
        className="container"
      >
        <Box
          title="Address"
          additionalInfo={<p>5th avnue New York, NY 10018 United State</p>}
          IsBtn={false}
        />
        <Box
          title="Book a table"
          additionalInfo={
            <p>Dogfood och Sliders foodtruck. Under Om oss kan ni läsa</p>
          }
          contactInfo={"(850) 435-4155"}
          IsBtn={false}
        />
        <Box
          title="Opening hours"
          additionalInfo={<p>Monday – Friday: 8am – 4pm Saturday: 9am – 5pm</p>}
          IsSocial={true}
          IsBtn={false}
        />
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-offset="100"
        className="sending-email container"
      >
        <Box
          title="newsletter"
          additionalInfo={
            <p>Subscribe to the weekly newsletter for all the latest updates</p>
          }
          IsSocial={false}
          IsBtn={true}
        />
      </div>
    </div>
  );
}

export default FooterSectionOne;
