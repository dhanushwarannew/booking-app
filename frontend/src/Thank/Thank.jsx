// src/components/Thank.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Thank.css'; // Importing CSS file for styling

const Thank = () => {
  return (
    <div className="thank-container">
      <h1>Thank You!</h1>
      <p>Your trip information has been successfully submitted.</p>
      <div className="thank-buttons">
        <Link to="/" className="btn btn-home">Go to Home</Link>
        <Link to="/plan" className="btn btn-plan">Plan Another Trip</Link>
      </div>
    </div>
  );
};

export default Thank;
