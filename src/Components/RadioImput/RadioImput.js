import React from "react";

const RadioImput = props => {
  return (
    <div>
      <input
        type="radio"
        name="manufacturer"
        id={props.value}
        value={props.value}
      />
      <label htmlFor={props.value}>{props.value}</label>
      <br />
    </div>
  );
};

export default RadioImput;
