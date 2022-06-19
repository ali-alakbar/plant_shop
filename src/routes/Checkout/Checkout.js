import React from 'react'
import HeadingLanding from '../../components/HeadingLanding/HeadingLanding';
import "./style/style.css";
import CouponBar from "./Box/ComponBar/CouponBar";
import Inputs from "./Box/Inputs and Order/Inputs";
import Order from "./Box/Inputs and Order/Order";
const Checkout = (props) => {
  return (
    <section className="section checkout-section">
      <HeadingLanding title={"checkout"} isThereList={false} />
      <form className="container coupon-container">
        <CouponBar />
        <div className="billing-container">
          <Inputs />
          <Order cart={props.cart} />
        </div>
      </form>
    </section>
  );
}

export default Checkout