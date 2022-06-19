import React from "react";

const CouponBar = () => {
  const showCoupon = () => {
    const active = document.querySelector("#input-section");
    active.classList.toggle("coupon-input-section-active");
  };
  return (
    <div className="bar-section">
      <div className="coupon-bar">
        <p>Have a Coupon? </p>
        <a href="///" onClick={() => showCoupon()} className="enter-code">
          Click here to enter your code
        </a>
      </div>
      <div id="input-section" className="coupon-input-section">
        <h4>If you have a coupon code, please apply it below.</h4>
        <div className="input-container">
          <input type="text" placeholder="Coupon code" />
          <button>Apply Coupon</button>
        </div>
      </div>
    </div>
  );
};

export default CouponBar;
