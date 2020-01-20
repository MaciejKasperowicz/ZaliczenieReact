import React from "react";
import ProductsService from "../../services/products.service";
const allManufacturers = ProductsService.getManufacturers();

const RadioImputs = () => {
  return allManufacturers.map((maker, index) => (
    <div key={index}>
      <input type="radio" name="manufacturer" key={index} value={maker} />
      <label htmlFor={maker} key={maker}>
        {maker}
      </label>
      <br />
    </div>
  ));
};

export default RadioImputs;
