import React, { useState, useEffect } from 'react';
import './_ExistingProfile.scss';

function ExistingProfile() {
  // Define state variables to store user data
  const [userData, setUserData] = useState({
    name: 'Ayeesha',
    pronunciation: 'ai·ee·shuh',
    pronouns: '(she/her)',
    customerFor: '1 Day',
    totalOrders: 0,
    totalSpend: 0,
    suggestedItems: [],
  });

  // Simulate fetching user data from an API (useEffect)
  useEffect(() => {
    // Replace with actual API call
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

  return (
    <div className="existing-profile">
      <div className="user-info">
        <div className="name-pronoun">
          <h2>{userData.name}</h2>
          <p>{userData.pronunciation}</p>
        </div>
        <p>{userData.pronouns}</p>
      </div>
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
      <div className="suggested-items">
        <h3>Suggested Items</h3>
        <ul>
          {userData.suggestedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExistingProfile;
