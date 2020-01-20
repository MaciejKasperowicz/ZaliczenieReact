import React from "react";
import Product from "../Product/Product";

const ProductsList = props => {
  return props.products.map(item => (
    <Product
      key={item.id}
      name={item.name}
      image={item.image}
      manufacture={item.manufacture}
      amount={item.amount}
      category={item.category}
      featured={item.featured}
    />
  ));
};

export default ProductsList;
