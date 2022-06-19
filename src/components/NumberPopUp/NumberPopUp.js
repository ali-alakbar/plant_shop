import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Shareon from "../ShareLinks/Shareon";
import "./style/style.css";

const NumberPopUp = () => {
  window.onload = () => {
    // ********** On load, the popup is visible and the background is dark **********
    document
      .querySelector(".popoup-number")
      .classList.add("popoup-number-active");
    //   ****** After 1 second it will execute the function ******
    setTimeout(() => {
      document
        .querySelector(".pop-number-content")
        .classList.add("pop-number-content-active");
    }, 1000);
  };

  const popNumber = document.querySelector(".popoup-number");
  console.log(popNumber);
    const clickParent = (e) => {
      if (e.target === e.currentTarget) {
        document
          .querySelector(".popoup-number")
          .classList.remove("popoup-number-active");
        document
          .querySelector(".pop-number-content")
          .classList.remove("pop-number-content-active");

      }
    };

  return (
    <div className="popoup-number">
      <div onClick={clickParent} className="popoup-number-container">
        <div className="pop-number-content">
          <div className="icon-container">
            <FontAwesomeIcon
              onClick={() => {
                document
                  .querySelector(".popoup-number")
                  .classList.remove("popoup-number-active");
                document
                  .querySelector(".pop-number-content")
                  .classList.remove("pop-number-content-active");
              }}
              icon={faClose}
            />
          </div>
          <div className="other-content">
            <h3 className="title">Get in touch</h3>
            <p>We will support you all day long!</p>
            {/* Below is the component that make capable of compying my email */}
            <Shareon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberPopUp;
