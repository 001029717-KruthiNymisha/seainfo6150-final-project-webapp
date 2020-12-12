import React from "react";
import { Link } from "react-router-dom";
import CakeListItem from "../CakeListItem/CakeListItem";
import styles from "./CakeList.module.css";
import PropTypes from "prop-types";

const CakeList = (props) => {
  return (
    <div>
      <div className={styles.pageTitle}>
      <h3>{props.pageTitle}</h3>
      </div>
      <ul className={styles.cakeList}>
        {props.cakes.map((cake,index) => (
          <Link key={index}  to={"/cake/"+cake.Category+"/"+cake.slug}>
            <li key={index}>
              <CakeListItem url={cake.image._url} title={cake.title} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
CakeList.propTypes = {
 cakes: PropTypes.array.isRequired
};
export default CakeList;
