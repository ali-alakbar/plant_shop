import React from "react";

function FooterSectionTwo() {
  return (
    <div className="footer-section-two">
      <div className="right-reserved">
        Copyright © 2022 <a href="https://myakbar.com">Akbar</a>. All Rights Reserved.
      </div>
      <div className="payment-methods">
        <img src={require("../media/payments.png")} alt="" />
      </div>
    </div>
  );
}

export default FooterSectionTwo;
