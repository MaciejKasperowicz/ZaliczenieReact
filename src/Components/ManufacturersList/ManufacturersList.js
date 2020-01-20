import React from "react";
import RadioImput from "../RadioImput/RadioImput";

const ManufacturersList = props => {
  return props.manufacturers.map((item, index) => (
    <RadioImput key={index} value={item} />
  ));
};

export default ManufacturersList;
