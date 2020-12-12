import React from "react";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

const CakeDropdown = function () {
  return (
    <div className={styles.navbar}>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>
          Categories
        </button>
        <div className={styles.dropdownContent}>
          <Link to="/Cakes" className={styles.subCategoryItem}>
                      Cakes
                    </Link>
          <Link to="/WeddingCakes" className={styles.subCategoryItem}>
            Wedding Cakes
          </Link>
          <Link to="/GlutenFreeCakes" className={styles.subCategoryItem}>
            Gluten-Free Cakes
          </Link>
          <Link to="/BirthdayCakes" className={styles.subCategoryItem}>
           BirthdayCakes
          </Link>
        </div>
        </div>
        </div>
  );
};

export default CakeDropdown;
