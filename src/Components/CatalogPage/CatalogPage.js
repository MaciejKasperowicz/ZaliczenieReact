import React, { useRef, useState, useEffect } from "react";
import ProductsService from "../../services/products.service";

import styles from "./CatalogPage.module.css";
import globalStyles from "../../App.module.css";
import ProductsList from "../ProductList/ProductsList";
import ManufacturersList from "../ManufacturersList/ManufacturersList";

const allProducts = ProductsService.getProducts();
const allManufacturers = ProductsService.getManufacturers();

const Catalog = () => {
  useEffect(() => {
    document.title = `Catalog`;
  }, []);
  const inputRef = useRef(null);
  const formRef = useRef(null);
  const [productsToShow, setProductToShow] = useState(allProducts);

  const handleChange = () => {
    const nameFromInput = inputRef.current.value;
    const formValue = formRef.current.elements.manufacturer.value;

    if (!nameFromInput) {
      formRef.current.elements.manufacturer.value = "all"; //zapytac jak zrobic, zeby przypisac to do zmeinnej i zmienaic
      setProductToShow(allProducts);
    } else if (nameFromInput && formValue !== "all") {
      const productsByName = ProductsService.getProductsByName(nameFromInput);
      const productsByNameByManufacturer = productsByName.filter(
        item => item.manufacture === formValue
      );

      setProductToShow(productsByNameByManufacturer);
    } else if (nameFromInput) {
      const productsByName = ProductsService.getProductsByName(nameFromInput);
      setProductToShow(productsByName);
    }
  };

  const radioHandleChange = e => {
    if (e.target.value === "all") {
      inputRef.current.value = "";
      setProductToShow(allProducts);
    } else if (e.target.value && e.target.value !== "all") {
      const productsByManufacturer = ProductsService.getProductsByManufacturer(
        e.target.value
      );
      inputRef.current.value = "";
      setProductToShow(productsByManufacturer);
    }
  };

  const handleClear = e => {
    e.preventDefault();
    inputRef.current.value = "";
    formRef.current.elements.manufacturer.value = "all";
    setProductToShow(allProducts);
  };

  return (
    <div className={globalStyles.container}>
      <h1 className={globalStyles.headerBig}>Catalog</h1>

      <div className={styles.catalog}>
        <div className={styles.columnLeft}>
          <div className={styles.filter}>
            <div className={styles.filterHeader}>
              <h4>Search</h4>
              <a
                href="catalog"
                onClick={handleClear}
                className={styles.filterHeaderClear}
              >
                Clear
              </a>
            </div>
            <div>
              <input
                type="text"
                placeholder="search..."
                ref={inputRef}
                onChange={handleChange}
              />
            </div>
            <h4>Manufacturer</h4>
            <div>
              <form ref={formRef} onClick={radioHandleChange}>
                <input
                  type="radio"
                  name="manufacturer"
                  id="all"
                  value="all"
                  defaultChecked
                />
                <label htmlFor="all">All</label>

                <ManufacturersList manufacturers={allManufacturers} />
              </form>
            </div>
          </div>
        </div>

        <div className={styles.columnRight}>
          <div className={globalStyles.products}>
            <ProductsList products={productsToShow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
