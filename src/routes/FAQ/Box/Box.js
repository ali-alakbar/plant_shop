import React, { useState } from "react";

const Box = (props, { key }) => {
  const [showResults, setShowResults] = useState(true);
  const onClick = () => setShowResults(!showResults);

  return (
    <div
    key={key}
      className={
        showResults === true
          ? "container-items"
          : "container-items active-container-items"
      }
    >
      <div onClick={onClick} className="question-container">
        <h3>{props.question}</h3>
        <h3>+</h3>
      </div>
      <div
        className={
          showResults === true
            ? "hidden-content"
            : "hidden-content active-hidden-content"
        }
      >
        {props.hiddenContent}
      </div>
    </div>
  );
};

export default Box;
