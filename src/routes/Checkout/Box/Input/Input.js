import React from "react";

function Input(props) {
  return (
    <div className="input-container">
      <label htmlFor="">
        {props.labelName} <span>*</span>
      </label>
      <br />
      <input required type={props.inputType} placeholder={props.placeholder} />
    </div>
  );
}

export default Input;
