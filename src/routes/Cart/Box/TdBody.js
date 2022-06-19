import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ThBody = (props, { key }) => {
  return (
    <tr id={key}>
      <td className="product-remove product-icon">
        <FontAwesomeIcon
          onClick={() => props.onRemove(props.product)}
          icon={faClose}
        />
      </td>
      <td className="product-remove product-img">
        <img src={props.img} alt="" />
      </td>
      <td className="product-name">{props.productName}</td>
      <td className="product-price">${props.productPrice.toFixed(2)}</td>
    </tr>
  );
};

export default ThBody;
