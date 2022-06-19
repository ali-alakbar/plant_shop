import React from "react";
import { NavLink } from "react-router-dom";

const Table = (props, { key }) => {
  return (
    <>
      <tr
        id={key}
        style={{ background: props.isWhite === true ? "#f7f7f7" : "#fff" }}
      >
        {/* --------------- */}

        <td className="img-section">
          <img src={props.img} alt="" />
        </td>
        {/* --------------- */}
        {/* --------------- */}
        <td className="food-info-section">
          <NavLink to="/Shop">{props.foodTitle}</NavLink>
          <span
            className="price"
            style={{
              textDecoration:
                props.isDiscount === false ? "auto" : "line-through",
            }}
          >
            ${props.prevPrice}
          </span>
          <span
            style={{ display: props.isDiscount === false ? "none" : "inline" }}
            className="price discounted-price"
          >
            ${props.price.toFixed(1)}
          </span>
          <p className="date">{props.date}</p>
        </td>
        {/* --------------- */}
        {/* --------------- */}
        <td className="add-cart-section">
          <span>In stock</span>
          <a
            onClick={(e) => {
              e.preventDefault();
              props.onAdd(props.product);
              // **** Show Side Bar ****
              const sideBar = document.querySelector(".shadow-page");
              sideBar.classList.add("active-side-bar");
            }}
            href="/#"
            className="add-cart"
          >
            Add to cart
          </a>
        </td>
        {/* --------------- */}
      </tr>
    </>
  );
};

export default Table;
