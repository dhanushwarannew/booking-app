// src/components/TripInfo.js

import React, { useState } from 'react';
import '../Info/Info.css'; // Optional: Import a CSS file for styling
import { Link } from "react-router-dom";

const Info = () => {
  const [tripDate, setTripDate] = useState('');
  const [days, setDays] = useState('');
  const [members, setMembers] = useState('');
  const [transport, setTransport] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const tripDetails = {
      tripDate,
      days,
      members,
      transport,
    };
    console.log('Trip Details:', tripDetails);
    alert('Trip information submitted!');
    // Here you can send the tripDetails to a backend server or another component as needed.
  };

  return (
    <div className="trip-info-container">
      <h1>Plan Your Trip</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tripDate">Date of Trip:</label>
          <input
            type="date"
            id="tripDate"
            value={tripDate}
            onChange={(e) => setTripDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="days">Number of Days:</label>
          <input
            type="number"
            id="days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="members">Number of Members:</label>
          <input
            type="number"
            id="members"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="transport">Mode of Transport:</label>
          <select
            id="transport"
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value="Car">Car</option>
            <option value="Bus">Bus</option>
            <option value="Train">Train</option>
            <option value="Flight">Flight</option>
          </select>
        </div>
        <button type="submit"><Link to="/Thank">Submit</Link></button>
        
      </form>
      <div>
      <center><Link to='/' className="a2"><h3 className="t1"> Back to Home</h3></Link></center>
      </div>
    </div>
  );
};

export default Info;
