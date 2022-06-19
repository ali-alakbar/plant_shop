import React from "react";
import "./style/style.css";
import { Rating } from "@mui/material";


function BestDeals(props, { key }) {
  return (
    <div id={key} className="box-content">
      <div className="img-container">
        <img src={props.small_img} alt="" />
      </div>
      <div className="other-content">
        <h4>{props.title}</h4>
        {/* Product Rating */}
        <Rating
          className="product-rating"
          name="read-only"
          value={props.rating}
          readOnly
        />
        {/* Product Price */}
        <p>$10</p>
      </div>
    </div>
  );
}

export default BestDeals;
