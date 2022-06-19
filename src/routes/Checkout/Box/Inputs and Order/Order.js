import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
function Order(props) {
  const { cart } = props;
  const tax = 5;

  const itemsPrice = props.cart.reduce(
    (a, c) => a + c.price * (c.discountPrice / 100),
    0
  );

  const [switcher, setSwitcher] = useState(false);

  return (
    <div className="rightSide">
      <h2>Your order</h2>
      <div className="product">
        <div className="row row-title">
          <h3>Product</h3>
          <h3>Subtotal</h3>
        </div>
        <div className="product-info">
          {cart.map((item) => {
            return (
              <div className="row row-product">
                <p>{item.foodTitle}</p>
                <h3>
                  ${" "}
                  {parseFloat(item.price * (item.discountPrice / 100)).toFixed(
                    2
                  )}
                </h3>
              </div>
            );
          })}
          <div className="row total-price">
            <h3>Subtotal</h3>
            <h3>${parseFloat(itemsPrice).toFixed(2)}</h3>
          </div>
          <div className="row shipping">
            <h3>Shipping</h3>
            <div className="shipping-type">
              <div className="input-container">
                <label
                  onClick={() => setSwitcher(false)}
                  htmlFor="shoppingIDOne"
                >
                  Free Shipping
                  <input id="shoppingIDOne" name="shipping" type="radio" />
                </label>
              </div>
              <div className="input-container">
                <label
                  id="labelTwo"
                  onClick={() => setSwitcher(true)}
                  htmlFor="shoppingIDTwo"
                >
                  Flat rate <span>${tax}</span>
                  <input id="shoppingIDTwo" name="shipping" type="radio" />
                </label>
              </div>
              <div className="input-container">
                <label
                  onClick={() => setSwitcher(false)}
                  htmlFor="shoppingIDThree"
                >
                  Local pickup
                  <input id="shoppingIDThree" name="shipping" type="radio" />
                </label>
              </div>
            </div>
          </div>
          <div className="total">
            <h3>Total</h3>
            <h2>
              ${" "}
              {switcher === true ? (
                <>{parseFloat(itemsPrice + tax).toFixed(2)}</>
              ) : (
                <>{parseFloat(itemsPrice).toFixed(2)}</>
              )}
            </h2>
          </div>
          <div className="payment-details">
            <div className="row">
              <PaymentDetails
                details="Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
                transactionType="Direct bank transfer"
                id={"one"}
              />
              <PaymentDetails
                details="Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode."
                transactionType="Check payment"
                id={"two"}
              />
              <PaymentDetails
                details="Pay with cash upon delivery."
                transactionType="Cash on delivery"
                id={"three"}
              />
              <PaymentDetails
                details="Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account."
                transactionType="PayPal"
                id={"four"}
              />
            </div>
          </div>
          <div className="policy">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our <NavLink to={"/Policy"}>privacy policy</NavLink>.
          </div>
          <button className="proceed-btn">Proceed to Paypal</button>
        </div>
      </div>
    </div>
  );
}

export default Order;
