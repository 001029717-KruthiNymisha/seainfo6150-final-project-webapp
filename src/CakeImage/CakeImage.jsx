import React from "react";
import styles from "./CakeImage.module.css"

const CakeImage = ({url, title}) => {
  return (
    <div className = {styles.cakeImage}>
      <img src={url} alt={title} />
    </div>
  );
};

export default CakeImage;