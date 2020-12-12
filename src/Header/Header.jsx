import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../images/logo.JPG";
import CakeDropdown from"../CakeCategories/CakeDropdown.jsx";

const Header = function () {
  return (
        <header className={styles.headerStyle}>
        <ul className={styles.navbar}>
               <Link to="/">
               <img className={styles.headerLogo} alt="LOGO" src={logo} />
               </Link>
                <li>
                <Link className={styles.categories} to="/Cupcakes">Cupcakes</Link>
                </li>
                <li>
                <Link className={styles.categories} to="/Cookies">Cookies</Link>
                </li>
                <CakeDropdown />

        </ul>
        <ul className={styles.navbar}>
        <li>
            <Link className={styles.loginCategory} to="/Login">Login</Link>
        </li>
        </ul>
        </header>
  );
};

export default Header;
