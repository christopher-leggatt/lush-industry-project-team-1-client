import "./_Home.scss";
import { useState } from "react";
import { CreateNewProfile } from "../createNewProfile/CreateNewProfile.jsx";

export const Home = (props) => {

  return (
    <div className="auth-form-container">
   
      <h2>Select Shopper Profile Type</h2>
      <button className="Search" type="submit">
        Search For Lush Member
      </button>
      <div className="form--style">
        <button
          className="NewProfile"
          onClick={() => props.onFormSwitch("register")}
        >
          Create A New User Profile
        </button>
        <button className="Guest" type="submit">
          Continue Shopping As A Guest
        </button>
      </div>
    </div>
  );
};

export default Home;
