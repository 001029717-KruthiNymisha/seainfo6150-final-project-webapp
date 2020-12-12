import React from "react";
import css from "./ItemImage.module.css"

const ItemImage = ({url, title}) => {
  return (
    <div className = {css.itemImage}>
      <img src={url} alt={title} />
    </div>
  );
};

export default ItemImage;