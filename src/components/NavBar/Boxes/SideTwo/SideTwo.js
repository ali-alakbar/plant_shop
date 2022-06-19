import React from "react";
import {
  faCartShopping,
  faHeart,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./style/style.css";
import { Badge } from "@mui/material";

const SideTwo = (props) => {
  return (
    <ul>
      <li className={"hidden-links"}>
        <NavLink to={"/Home"}>
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
      </li>
      <li
        onClick={() => {
          document
            .querySelector(".popoup-number")
            .classList.add("popoup-number-active");
          setTimeout(() => {
            document
              .querySelector(".pop-number-content")
              .classList.add("pop-number-content-active");
          }, 500);
        }}
        className={"hidden-links"}
      >
        <FontAwesomeIcon icon={faPhone} />
      </li>
      <li>
        <NavLink to={"/Wishlist"}>
          {/* Badge is the notification element */}
          <Badge
            color="error"
            max={10}
            badgeContent={props.productsLength}
            showZero
          >
            <FontAwesomeIcon icon={faHeart} />
          </Badge>
        </NavLink>
      </li>
      <span className="separator"></span>
      <li>
        <NavLink to={"/Cart"}>
          {/* Badge is the notification element */}
          <Badge
            color="error"
            max={10}
            badgeContent={props.cartLength}
            showZero
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </Badge>
        </NavLink>
      </li>
    </ul>
  );
};

export default SideTwo;
