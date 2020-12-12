import React from 'react';
import styles from "./ThankYou.module.css";
import Thanks from "../images/Thanks.gif";

const ThankYou = () => {
    return (
        <div className={styles.thankYou}>
          <h2>Your order has been successfully placed!</h2>
          <div><img src={Thanks} alt="thanks"/></div>
        </div>
    )
}

export default ThankYou;
