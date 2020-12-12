import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import styles from "./App.css";
import { isEmpty } from "lodash";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import Cake from "./Cakes/Cakes.jsx";
import CakeList from"./CakeList/CakeList.jsx";
import Home from"./Home/Home.jsx";
import Form from "./Form/Form.jsx";
import ThankYou from "./ThankYou/ThankYou.jsx";
import Error from"./Error/Error.jsx";



const App = () => {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    // data fetching code
    const fetchData = async () => {
      const result = await fetch("https://demo2103212.mockable.io/Cakes");
      const resultJson = await result.json();
      setFetchedData(resultJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);


  let showAllCakes;
  let showWeddingCakes;
  let showGlutenCakes;
  let showBirthdayCakes;
  let showCupcakes;
  let showCookies;

if (!isEmpty(fetchedData)) {
    const weddingCakes = Object.values(fetchedData.WeddingCakes);
    const glutenCakes = Object.values(fetchedData.GlutenFreeCakes);
    const birthdayCakes = Object.values(fetchedData.BirthdayCakes);
    const cupcakes = Object.values(fetchedData.CupCakes);
    const cookies = Object.values(fetchedData.Cookies);
    const allCakes= weddingCakes.concat(glutenCakes).concat(birthdayCakes);

   showAllCakes=(<CakeList cakes={allCakes} pageTitle="Cakes" /> );
   showWeddingCakes=(<CakeList cakes={weddingCakes} pageTitle="Wedding Cakes" /> );
   showGlutenCakes=(<CakeList cakes={glutenCakes} pageTitle="Gluten-Free Cakes" /> );
   showBirthdayCakes=(<CakeList cakes={birthdayCakes} pageTitle="Birthday Cakes" /> );
   showCupcakes=(<CakeList cakes={cupcakes} pageTitle="Cupcakes" /> );
   showCookies=(<CakeList cakes={cookies} pageTitle="Cookies" /> );
}
else
{
   showAllCakes=(<div> Fetching</div> );
   showWeddingCakes=(<div> Fetching</div> );
   showGlutenCakes=(<div> Fetching</div> );
   showBirthdayCakes=(<div> Fetching</div> );
   showCupcakes=(<div> Fetching</div> );
   showCookies=(<div> Fetching</div> );
}
return(
    <>
    <Header />
    <Switch>

                <Route path="/" exact component={Home} />
                <Route path="/aboutUs" exact component={AboutUs} />
                <Route path="/Login" exact component={Form} />
                <Route path="/ThankYou" exact component={ThankYou} />
                <Route path="/contactUs" exact component={ContactUs} />
                <Route path="/Cakes" exact render={() => showAllCakes} />
                <Route path="/WeddingCakes" exact render={() => showWeddingCakes} />
                <Route path="/GlutenFreeCakes" exact render={() => showGlutenCakes} />
                <Route path="/BirthdayCakes" exact render={() => showBirthdayCakes} />
                <Route path="/Cupcakes" exact render={() => showCupcakes} />
                <Route path="/Cookies" exact render={() => showCookies} />
                <Route path="/cake/:Category/:slug" exact render={({ match }) => (
                    // getting the parameters from the url and passing
                    // down to the component as props
                    <Cake
                        Category={match.params.Category}
                        slug={match.params.slug}
                    />
                )}
          />
                <Route path="/error" exact component={Error} />
                <Route component={Error} />
           </Switch>
           <Footer/>
           </>
);
}
export default App;