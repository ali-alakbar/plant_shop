import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AddedContent(props) {
  const { discountPrice } = props;
  const totalPrice = props.price * (discountPrice / 100);
  return (
    <div key={props.id} className="added-content-container">
      <div onClick={() => props.onRemove(props.product)} className="icon">
        <FontAwesomeIcon icon={faClose} />
      </div>
      <div className="img-container">
        <img src={props.img} alt="" />
      </div>
      <div className="food-info">
        <h3 className="food-title">{props.foodTitle}</h3>
        <br />
        <span className="price">
          ${props.idDiscount === false ? props.price : totalPrice.toFixed(1)}
        </span>
      </div>
    </div>
  );
}

export default AddedContent;
