import React, { useState, useEffect } from 'react';
import './_NewProfile.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import smalltile1 from "../../assets/images/small-tile-1.svg"
import smalltile2 from "../../assets/images/small-tile-2.svg"
import smalltile3 from "../../assets/images/small-tile-3.svg"
import smalltile4 from "../../assets/images/small-tile-4.svg"
import smalltile5 from "../../assets/images/small-tile-5.svg"
import { ReactComponent as Wheelchair } from "../../assets/icons/wheelchair.svg";
function NewProfile() {
  // Define state variables to store user data
  const [userData, setUserData] = useState({
    name: 'Ayeesha',
    pronunciation: 'ai·ee·shuh',
    pronouns: '(she/her)',
    customerFor: '1 Day',
    totalOrders: 0,
    totalSpend: 0,
  });

  // Simulate fetching user data from an API (useEffect)
  useEffect(() => {
    // Replace with an actual API call
    fetchUserData()
      .then(data => setUserData(data))
      .catch(error => console.error(error));
  }, []);

  // Simulate an API request to fetch user data
  const fetchUserData = async () => {
    // Replace with your API endpoint
    const response = await fetch('https://api.example.com/user-profile');
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data = await response.json();
    return data;
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div className="new-profile">
      <div className="user-info-stats">
        {/* User Info */}
        <div className="category__back-accessibility-wrapper">
          <div className="user-info">
          <h2>{userData.name}</h2>
            <div className="name-pronoun">
              
              <p>{userData.pronouns}</p>
            </div>
            <button className="category__accessibility-btn">
              <Wheelchair className="category__accessibility-icon" />
            </button>
          </div>
        </div>
        <div className='name-pronunciation'>
          <p>{userData.pronunciation}</p>
          </div>
        {/* User Stats */}
        <div className="user-stats">
          <div className="profile-card">
            <h3>Customer For</h3>
            <p>{userData.customerFor}</p>
          </div>
          <div className="profile-card">
            <h3>Total Orders</h3>
            <p>{userData.totalOrders}</p>
          </div>
          <div className="profile-card">
            <h3>Total Spend</h3>
            <p>${userData.totalSpend.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Suggested Items */}
      <div className="suggested-items">
        <h3>Suggested Items</h3>

        <Carousel responsive={responsive} infinite={false} className="release-slider">
          <div className="carousel-item-first carousel-item">
            <img src={smalltile1} alt="Image" />
          </div>
          <div className="carousel-item">
            <img src={smalltile2} alt="Image" />
          </div>
          <div className="carousel-item">
            <img src={smalltile3} alt="Image" />
          </div>
          <div className="carousel-item">
            <img src={smalltile4} alt="Image" />
          </div>
          <div className="carousel-item">
            <img src={smalltile5} alt="Image" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default NewProfile;
