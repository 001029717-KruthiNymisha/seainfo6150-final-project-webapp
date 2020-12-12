import React, {useEffect, useState} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { isEmpty } from "lodash";
import styles from "./Cake.module.css";
import CakeDetails from "../CakeDetails/CakeDetails.jsx";
import CakeImage from "../CakeImage/CakeImage.jsx";
import ItemImage from "../CakeImage/ItemImage.jsx";



const Cake = (props) => {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
      const result = await fetch("https://demo2103212.mockable.io/Cakes");
      const resultJson = await result.json();
      setFetchedData(resultJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  let displayContent;
  if(!isEmpty(fetchedData)) {
  /*console.log("entering");
  console.log(fetchedData[props.Category]);*/
     const cake = fetchedData[props.Category][props.slug];
     displayContent = (
        <body>
        <div className={styles.pageTitle}>{cake.title}</div>
        <div className={styles.cakeDiv}>
                     <div><ItemImage url={cake.image._url} text={cake.title} /></div>
                     <div>
                     <CakeDetails
                     Summary={cake.Summary}
                     Ingredients={cake.Ingredients}
                     />
                     <br/>
                    < Link className={styles.Cart} to="/ThankYou" >Check Out</Link>
                     </div>
                     </div>
     </body>
                         );
  } else {
    displayContent = <div><center>Data is fetching</center></div>;
  }

  return displayContent;

};

export default Cake;
