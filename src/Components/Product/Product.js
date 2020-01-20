import React from "react";
import globalStyles from "../../App.module.css";

const Product = props => {
  return (
    <div className={globalStyles.product}>
      <img className={globalStyles.productImg} src={props.image} alt="foto" />
      <p className={globalStyles.productPrice}>{props.amount}</p>
      <h3>{props.name}</h3>
    </div>
  );
};

export default Product;
