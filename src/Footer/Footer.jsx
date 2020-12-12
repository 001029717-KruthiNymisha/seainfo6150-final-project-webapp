import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = function () {
  return (
    <footer >
        <div className={styles.footer}>
         <Link className={styles.option} to="/AboutUs" className={styles.footerLink}>
         About Us
         </Link>
         <Link className={styles.option} to="/ContactUs" className={styles.footerLink}>
         Contact Us
         </Link>
         </div>
         <div className={styles.copyright} ><p>©All the content in this website are downloaded from internet as part of INFO6150 project</p></div>
    </footer>
  );
};

export default Footer;
