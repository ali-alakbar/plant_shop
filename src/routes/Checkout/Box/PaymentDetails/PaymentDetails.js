import React, { useState } from "react";

const PaymentDetails = (props) => {
  const [showResults, setShowResults] = useState(true);
  const onClick = () => setShowResults(!showResults);

  console.log(showResults);
  return (
    <>
      <div className="input-container">
        <label onClick={onClick} htmlFor={`directBank${props.id}`}>
          {props.transactionType}
        </label>
        <input id={`directBank${props.id}`} name="directBank" type="radio" />
      </div>
      <div
        className={
          showResults ? "hidden-details" : "hidden-details active-details"
        }
      >
        {props.details}
      </div>
    </>
  );
};

export default PaymentDetails;
