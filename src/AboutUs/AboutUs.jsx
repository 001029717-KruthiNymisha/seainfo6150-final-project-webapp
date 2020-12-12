import React from "react";
import styles from "./AboutUs.module.css";
import aboutUs from"../images/aboutUs.jpg";

const AboutUs = () => {
  return (
  <body>
    <div className={styles.aboutUs1}>
      <div className={styles.aboutUs}>
        <div>
        <h1 className={styles.title}> About Us</h1>
        <p className={styles.text}>
                   " As part of cakebake, we have a friendly family of professional employees who's creative skills bring an edge to the food"
                </p>
                <p className={styles.text}>Our ulta modren equipments with world class hygiene measures we produce Gourmet at budget</p>
        <div><img className={styles.aboutUsImage} src={aboutUs} alt="aboutUs"  /></div>
        </div>

      </div>
    </div>
    </body>
  );
};

export default AboutUs;