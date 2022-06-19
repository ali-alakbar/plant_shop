
import "./style/style.css";
import CloseIcon from "../../helpers/CloseCustomIcon/CloseIcon";
import { NavLink } from "react-router-dom";
import RemoveSideBar from "../../helpers/RemovingSideBarFunction/RemoveSideBar";
// import getTotalCost from "../../helper/Subtotal/getTotalCost";
const SideBar = (props) => {
  const itemsPrice = props.cart.reduce(
    (a, c) => a + c.price * (c.discountPrice / 100),
    0
  );

  const clickParent = (e) => {
    if (e.target === e.currentTarget) {
      RemoveSideBar();
    }
  };

  return (
    <>
      <div onClick={clickParent} className="shadow-page">
        <div className="side-bar-box">
          <div className="heading-title">
            <h3>Shopping Cart</h3>
            <CloseIcon />
          </div>
          <div
            style={{ display: props.cartLength === 0 ? "block" : "none" }}
            className="content"
          >
            There is no Items
          </div>
          <div className="added-content">{props.mappingForAdding()}</div>
          <div className="checkout-items">
            <div className="total-price">
              <h3>Subtotal</h3>
              <h3>${itemsPrice.toFixed(2)}</h3>
            </div>
            <div className="links">
              <NavLink to="/Checkout" className="checkout">
                Checkout
              </NavLink>
              <NavLink to="/Cart" className="view-cart">
                View Cart
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;