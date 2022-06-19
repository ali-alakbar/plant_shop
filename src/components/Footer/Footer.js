import React from "react";
import FooterSectionOne from "./Boxes/FooterSectionOne";
import FooterSectionTwo from "./Boxes/FooterSectionTwo";

import "./style/footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <FooterSectionOne />
      <FooterSectionTwo />
      
    </footer>
  );
}

export default Footer;
