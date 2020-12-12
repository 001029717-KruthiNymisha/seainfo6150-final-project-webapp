import React from 'react'
import styles from "./CakeDetails.module.css";
import { Switch, Route, Link } from "react-router-dom";


const CakeDetails = props => {
  return (
  <div>
    <div>
    <h3 className={styles.titleDetails}>Cake Details</h3>
      </div>
       <div className = {styles.cakeDetails}> Summary: {props.Summary}<br /></div>
        <div className = {styles.cakeDetails}>Ingredients: {props.Ingredients}<br /></div>

    </div>

  );
};

export default CakeDetails;
