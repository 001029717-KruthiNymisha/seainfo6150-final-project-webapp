import React from 'react'
import Form from "../Form/Form";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Weddinghome from "../images/Weddinghome.jpg";
import glutenfree from "../images/glutenfree.png";
import Birthday from "../images/Birthday.jpg";
import cakeshome from "../images/cakeshome.jpg";
import Cupcakes from "../images/Cupcakes.jpg";
import cookies from "../images/cookies.jpg";


import Header from "../Header/Header.jsx";

const Home = () => {
    return (

                    <body className={styles.homeAll}>
                    <ul className={styles.homeList}>
                      <li className={styles.category}>
                      <Link to="/Cakes">
                      <img src={cakeshome} alt={cakeshome}/>
                      </Link>
                       </li>
                      <li className={styles.category}>
                      <Link  to="/WeddingCakes">
                      <img src={Weddinghome} alt={Weddinghome}/>
                      </Link>
                       </li>
                      <li className={styles.category}>
                      <Link to="/BirthdayCakes">
                      <img src={Birthday} alt={Birthday}/>
                      </Link>
                       </li>
                      <li className={styles.category}>
                      <Link to="/Cupcakes">
                      <img src={Cupcakes} alt={Cupcakes}/>
                      </Link>
                      </li>
                      <li className={styles.category}>
                      <Link to="/Cupcakes">
                      <img src={cookies} alt={cookies}/>
                      </Link>
                      </li>
                        <li className={styles.category}>
                      <Link to="/GlutenFreeCakes">
                      <img src={glutenfree} alt={glutenfree}/>
                      </Link>
                       </li>
</ul>


    </body>
    )
}

export default Home