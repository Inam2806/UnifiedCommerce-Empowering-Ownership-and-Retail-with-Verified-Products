import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/OwnerPage.scss';
import '../style/CommonOwner.scss';

const OwnerPage = ({ profile, isLoggedIn, onLogout }) => {


  return (
    <div className="containerX">
      <h1>Company Dashboard: {profile.companyName}</h1>
      <h2>Welcome, {profile.username}!</h2>
      {isLoggedIn && (
        <nav className="centered-nav-Owner">
          <ul>
            <li>
              <NavLink to={`/Owner-Home/Add`} className="product-button">Product Add</NavLink>
            </li>
            <li>
              <NavLink to={`/Owner-Home/Sale`} className="product-button">Product Sales</NavLink>
            </li>
          </ul>
        </nav>
      )}
      <div className="welcome-container">
        <h2>Welcome to the Dashboard! </h2>
        <p>Learn more about brokers by navigating through the menu.</p>
      </div>

      <button className="logout" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default OwnerPage;