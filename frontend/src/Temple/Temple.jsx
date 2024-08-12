// src/components/ExploreGoldenTemple.js

import React from 'react';
import '../Temple/Temple.css'; // Optional: Import a CSS file for styling
import golden from '../image/goldentemple.jpg'
import { Link } from "react-router-dom";
const Temple = () => {
  return (
    <div className="explore-container">
      <h1>Explore the Golden Temple, Amritsar</h1>
      
      <section className="introduction">
        <img src={golden} alt="Golden Temple" className="main-image" width={300} height={200}/>
        <p>
          The Golden Temple, also known as Harmandir Sahib, is the holiest Gurdwara and the most important pilgrimage site of Sikhism. Located in the city of Amritsar, Punjab, India, it attracts millions of visitors from around the world.
        </p>
      </section>
      
      <section className="beauty">
        <h2>Architectural Beauty</h2>
        <p>
          The Golden Temple is renowned for its stunning architecture, which features a unique blend of Hindu and Islamic styles. The temple is adorned with a gold-covered dome, intricate marble work, and a serene pool surrounding it.
        </p>
      
      </section>
      
      <section className="importance">
        <h2>Historical and Cultural Importance</h2>
        <p>
          The Golden Temple has a rich history and profound cultural significance. It was founded by the fourth Sikh Guru, Guru Ram Das, in 1577 and completed by his successor, Guru Arjan Dev. The temple stands as a symbol of brotherhood and equality, welcoming people from all walks of life.
        </p>
        <p>
          The temple complex also houses the Akal Takht, the highest seat of earthly authority of the Khalsa. The Guru Granth Sahib, the holy scripture of Sikhism, is recited continuously within the temple, providing spiritual solace to devotees.
        </p>
      </section>
      
      <section className="visitor-info">
        <h2>Visitor Information</h2>
        <p><strong>Location:</strong> Golden Temple Road, Amritsar, Punjab, India</p>
        <p><strong>Opening Hours:</strong> Open 24 hours, all days of the week</p>
        <p><strong>Best Time to Visit:</strong> Early morning or evening for the most serene experience</p>
      </section>
      <div>
      <center><Link to='/' className="a2"><h3 className="t1"> Back to Home</h3></Link></center>
      </div>
      
    </div>
  );
};

export default Temple;
