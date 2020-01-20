import React, { useEffect } from "react";
import ProductsList from "../ProductList/ProductsList";
import ProductsService from "../../services/products.service";
import globalStyles from "../../App.module.css";

const desktops = ProductsService.getFeaturedProductsByCategory("desktop");
const tablets = ProductsService.getFeaturedProductsByCategory("tablet");

const Home = () => {
  useEffect(() => {
    document.title = `Home`;
  }, []);
  return (
    <div className={globalStyles.container}>
      <h1 className={globalStyles.headerBig}>Welcome to our store</h1>
      <h2 className={globalStyles.headerSmall}>Desktops</h2>
      <div className={globalStyles.products}>
        <ProductsList products={desktops} />
      </div>

      <h2 className={globalStyles.headerSmall}>Tablets</h2>
      <div className={globalStyles.products}>
        <ProductsList products={tablets} />
      </div>
    </div>
  );
};

export default Home;
