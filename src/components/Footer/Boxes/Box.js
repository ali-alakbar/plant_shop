import {
  faFacebook,
  faTwitter,
  faWordpress,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Box(props) {
  return (
    <div className="box_of_info">
      <div className="header-address">
        <h2>{props.title}</h2>
      </div>
      <div className="additional-info">{props.additionalInfo}</div>
      <div className="contact-info">{props.contactInfo}</div>
      <div
        style={{ display: props.IsSocial === true ? "block" : "none" }}
        className="social-media"
      >
        <ul>
          <li className="social">
            {" "}
            <FontAwesomeIcon icon={faFacebook} />{" "}
          </li>
          <li className="social">
            {" "}
            <FontAwesomeIcon icon={faTwitter} />{" "}
          </li>
          <li className="social">
            {" "}
            <FontAwesomeIcon icon={faYoutube} />{" "}
          </li>
          <li className="social">
            {" "}
            <FontAwesomeIcon icon={faWordpress} />{" "}
          </li>
        </ul>
      </div>

      <div
        style={{ display: props.IsBtn === true ? "flex" : "none" }}
        className="subscribe"
      >
        <input type="email" placeholder="Your Email..." />
        <button>SUBSCRIbE</button>
      </div>
    </div>
  );
}

export default Box;
