import React from "react";
import globalStyles from "../../App.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={globalStyles.container}>
        <p>
          Shop © 2020 <br />
          Designed by Andrzej
        </p>
      </div>
    </footer>
  );
};

export default Footer;
