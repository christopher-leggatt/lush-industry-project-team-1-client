import "./_Home.scss";
import { Link } from 'react-router-dom';
import { CreateNewProfile } from "../createNewProfile/CreateNewProfile";


export const Home = (props) => {

  return (
    <div className="auth-form-container">
   
      <h2>Select Shopper Profile Type</h2>
      <button className="Search" type="submit">
        Search For Lush Member
      </button>
      <div className="form--style">
      <Link to="/CreateNewProfile">
  <button className="NewProfile">
    Create A New User Profile
  </button>
</Link>

        <button className="Guest" type="submit">
          Continue Shopping As A Guest
        </button>
      </div>
    </div>
  );
};

export default Home;
