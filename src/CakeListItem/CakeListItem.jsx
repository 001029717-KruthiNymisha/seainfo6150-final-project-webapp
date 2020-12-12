import React from "react";
import CakeImage from "../CakeImage/CakeImage.jsx";
import styles from "./CakeListItem.module.css";

const CakeListItem = (props) => {
  return (
    <div className={styles.cakeListItem}>
      <CakeImage url = {props.url} title={props.title}></CakeImage>
      <div className={styles.titleStyle}>{props.title}</div>
    </div>
  );
};

export default CakeListItem;
/*<h1>{props.title}</h1>*/