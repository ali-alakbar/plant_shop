import React from "react";
import { NavLink } from "react-router-dom";

function RightSide(props) {
  return (
    <div
      style={{ display: props.cartLength === 0 ? "none" : "block" }}
      className="right-side"
    >
      <div className="rightSide">
        <h2>Your order</h2>
        <div className="product">
          <div className="product-info">
            <div className="row total-price">
              <h3>Subtotal</h3>
              <h3>${parseFloat(props.itemsPrice).toFixed(2)}</h3>
            </div>
            <div className="row shipping">
              <h3>Shipping</h3>
              <div className="shipping-type">
                <div className="input-container">
                  <label
                    onClick={() => props.setSwitcher(false)}
                    htmlFor="shoppingIDOne"
                  >
                    Free Shipping
                    <input id="shoppingIDOne" name="shipping" type="radio" />
                  </label>
                </div>
                <div className="input-container">
                  <label
                    id="labelTwo"
                    onClick={() => props.setSwitcher(true)}
                    htmlFor="shoppingIDTwo"
                  >
                    Flat rate <span>${props.tax}</span>
                    <input id="shoppingIDTwo" name="shipping" type="radio" />
                  </label>
                </div>
                <div className="input-container">
                  <label
                    onClick={() => props.setSwitcher(false)}
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
                {props.switcher === true ? (
                  <>
                    {parseFloat(
                      props.itemsPrice + props.tax * props.qty
                    ).toFixed(2)}
                  </>
                ) : (
                  <>{parseFloat(props.itemsPrice * props.qty).toFixed(2)}</>
                )}
              </h2>
            </div>
            <NavLink to={"/Checkout"} className="proceed-btn">
              Proceed to Paypal
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
