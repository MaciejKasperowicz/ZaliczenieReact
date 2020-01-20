import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import globalStyles from "../../App.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <div className={globalStyles.container}>
        <ul className={styles.nav}>
          <li>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/catalog" className={styles.link}>
              Catalog
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.link}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
