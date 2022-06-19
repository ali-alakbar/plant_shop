import React from "react";
import Input from "../Input/Input";

function Inputs() {
  return (
    <div className="leftSide">
      <div className="billing-section">
        <h2>Billing details</h2>
        <Input
          inputType={"text"}
          placeholder={"First name"}
          labelName={"First Name"}
        />
        <Input
          inputType={"text"}
          placeholder={"Last name"}
          labelName={"Last Name"}
        />

        <Input
          inputType={"text"}
          placeholder={"Street address"}
          labelName={"Street address"}
        />
        <Input inputType={"tel"} placeholder={""} labelName={"Phone"} />
        <Input
          inputType={"email"}
          placeholder={""}
          labelName={"Email address"}
        />
      </div>
    </div>
  );
}

export default Inputs;
