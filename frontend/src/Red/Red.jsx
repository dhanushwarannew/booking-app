import React from 'react';
import '../Temple/Temple.css'; // Import a CSS file for styling
import reds from '../image/Red_fort.avif'

import { Link } from 'react-router-dom';

const Red = () => {
  return (
    <div className="explore-container">
      <header>
        <h1>Explore the Red Fort, Delhi</h1>
      </header>
      
      <article className="introduction">
      <img src={reds} alt="Golden Temple" className="main-image" width={300} height={200}/>
        <p>
          The Red Fort, also known as Lal Qila, is a historic fort in the city of Delhi, India. It served as the main residence of the Mughal Emperors for nearly 200 years, until 1857. The fort is a UNESCO World Heritage site and attracts millions of visitors annually.
        </p>
      </article>
      
      <article className="beauty">
        <h2>Architectural Beauty</h2>
        <p>
          The Red Fort is renowned for its massive enclosing walls of red sandstone, built in the Mughal architectural style. The fort complex includes palaces, audience halls, and beautiful gardens, reflecting a blend of Persian, Timurid, and Indian architectural styles.
        </p>
      </article>
      
      <article className="importance">
        <h2>Historical and Cultural Importance</h2>
        <p>
          Commissioned by Emperor Shah Jahan in 1638, the Red Fort stands as a symbol of India's rich history and cultural heritage. The fort has witnessed numerous historical events, including the first war of Indian independence in 1857.
        </p>
        <p>
          Every year on Independence Day, the Prime Minister of India hoists the national flag at the main gate of the fort and delivers a nationally broadcast speech from its ramparts, making it a site of great national importance.
        </p>
      </article>
      
      <article className="visitor-info">
        <h2>Visitor Information</h2>
        <p><strong>Location:</strong> Netaji Subhash Marg, Chandni Chowk, New Delhi, Delhi, India</p>
        <p><strong>Opening Hours:</strong> 9:30 AM to 4:30 PM, Monday closed</p>
        <p><strong>Best Time to Visit:</strong> October to March, to avoid the extreme summer heat</p>
      </article>
      
      <footer> <center>
        <Link to='/' className="a2">
          <h3 className="t1">Back to Home</h3>
        </Link></center>
      </footer>
    </div>
  );
};

export default Red;
