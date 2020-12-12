import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Form.module.css";

const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div>
      {
        submittedForm ? (
          <div className={styles.formStyle}>
           <h2> <p>Congratulations</p> <i>{submittedForm.get("fname")}{submittedForm.get("lname")}</i>!</h2><br/>
            <h3> You have successfully created you account</h3>
            <p>You will receive your</p>{submittedForm.get("subscription")} <p>subscription mails to:{submittedForm.get("email")}</p><br/>
            <p>You will receive new recipe notifications on</p>{submittedForm.get("phone")}
            <b>{submittedForm.get("Login")}</b><br /> <br />
            <Link to="/">
              <button type="button">Click Here to shop</button>
            </Link>
          </div>
        ) : (
          <div className={styles.formStyle}>
          <form  onSubmit={onSubmit}>
          <h2><b>Login</b></h2>
            <label htmlFor="FNameId"><b>First Name</b> (required):</label><br/>
            <input type="text" name="fname" id="FNameId" required /><br />
             <label htmlFor="LNameId"><b>Last Name</b> (required):</label><br/>
             <input type="text" name="lname" id="LNameId" required /><br />
             <label htmlFor="Uname"><b>Username</b> (required):</label><br/>
             <input type="text" name="Uname" id="Uname" required /><br />

             <label htmlFor="pNo"><b>Phone.No </b> (required):</label><br/>
            <input type="tel" name="phone" id="pNo" required /><br />

            <label htmlFor="emailId"><b>Email (required)</b> :</label><br/>
            <input type="email" name="email" id="emailId" required /><br />

            <label htmlFor="password"><b>Password:</b></label><br/>
            <input type="password" className="form-control" id="password" placeholder="Password"/><br/>
            <label htmlFor="AgeId"><b>Age</b></label><br/>
            <select name="Age" id="AgeId">
              <option value="Age<15">Age:5-15</option>
              <option value="Age:15-25">Age:15-25</option>
              <option value="Age:25-50">Age:Age:25-50</option>
              <option value="Age:25-50">Age:Age:25-50</option>
            </select><br />
            <label htmlFor="GenderId"><b>Gender</b></label><br/>
            <select name="Gender" id="GenderId">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select><br />
            <br/>
            Select the subscription method<br/>
            <input type="radio" id="weekly" name="subscription" value="weekly" />
              <label htmlFor="weekly">Weekly Subscription</label><br />
              <input type="radio" id="monthly" name="subscription" value="monthly" />
              <label htmlFor="monthly">Monthly Subscription</label><br />
              <input type="radio" id="yearly" name="subscription" value="yearly" />
              <label htmlFor="yearly">Yearly Subscription</label><br /><br/>
            <input type="submit" value="SignUp" /><br/><br/>
          </form>
          </div>
        )
      }
    </div>
  )
}

export default Form
