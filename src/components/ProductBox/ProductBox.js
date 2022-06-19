import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./style/style.css";
import ShowSideBar from "../../helpers/ShowingSideBarFunction/ShowSideBar";
import { Rating } from "@mui/material";

const ProductBox = (props, { id }) => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);



  return (
    <div
      data-aos="fade-down"
      data-aos-duration="500"
      data-aos-offset="100"
      key={id}
      className="item-box"
    >
      <div className="img-container">
        <img className="noHide" src={props.img} alt="" />
        <img className="onHide" src={props.img2} alt="" />
      </div>
      <div className="other-content">
        {/* Product Title */}
        <NavLink to="#">Backpack double strap</NavLink>

        {/* Product Rating */}

        <Rating
          className="product-rating"
          name="read-only"
          value={props.rating}
          readOnly
        />

        {/* Product Price */}
        <div className="price-container">
          <span
            style={{
              textDecoration:
                props.isDiscount === false ? "auto" : "line-through",
              color: props.isDiscount === false ? "#51a644" : "#999",
              fontWeight: props.isDiscount === false ? "700" : "",
            }}
            className="price"
          >
            ${props.prevPrice}
          </span>{" "}
          <span
            style={{
              display: props.isDiscount === false ? "none" : "inline",
            }}
            className="discounted-price"
          >
            {" "}
            ${props.price.toFixed(1)}
          </span>
        </div>
      </div>
      {/* -------------- */}
      <div className="icon-container-wrapper">
        <div
          className="icon-container"
          onClick={(e) => {
            e.preventDefault();
            props.onAdd(props.product);
            // **** Show Side Bar ****
            ShowSideBar();
          }}
        >
          Add to Cart
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </div>
      {/* -------------- */}
    </div>
  );
};

export default ProductBox;
