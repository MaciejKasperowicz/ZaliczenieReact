import React from "react";
import ProductsList from "../ProductList/ProductsList";
import globalStyles from "../../App.module.css";

const ColumnRight = props => {
  return (
    <div className={globalStyles.products}>
      <ProductsList products={props.products} />
    </div>
  );
};

export default ColumnRight;
