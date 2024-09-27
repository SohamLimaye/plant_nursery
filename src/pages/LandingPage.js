import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';  // Import the CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <p>Welcome to Paradise Nursery, your one-stop shop for houseplants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;