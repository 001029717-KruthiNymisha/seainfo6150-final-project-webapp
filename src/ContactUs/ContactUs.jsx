import React from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
  <body>
    <div className={styles.contactUs}>
      <div>
        <h1 className={styles.title}>Contact Us</h1>
      </div>
      <div className={styles.contactUs1}>
        <p>Kruthi Nymisha</p>
        <a href="mailto:kruthi@gmail.com">kruthi@gmail.com</a>
        <p>Ph.No: +(000)-000-8900</p>
      </div>
    </div>
    </body>
  );
};
export default ContactUs;