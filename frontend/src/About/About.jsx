import React from 'react';
import './About.css';
import dh from '../image/d1.jpg';
import aswin from '../image/aswin.jpg';
import { Link } from "react-router-dom";

const About = () => (
  <div className="about-us-container">
    <h2>About Us</h2>
    <p>Welcome to our BookMyTour! We are committed to providing the best services and places to our customers. Our team is dedicated, skilled, and ready to meet your needs. Below is a brief introduction to our team and our mission.</p>
    
    <h3>Our Mission</h3>
    <p>Our mission is to deliver high-quality Places that bring value to our customers Tours. We strive for excellence in everything we do and continuously work to improve our offerings.</p>
    
    <h3>Our Team</h3>
    <div className="team-member">
      <img src={dh} alt="Team Member" />
      <div className="team-member-info">
        <h4>Dhanushwaran.S</h4>
        <p>Developer</p>
        <p>Dhanush has over 0 years of experience in the industry But the thing is passionate about leading our company to new heights.</p>
        <a href="https://www.linkedin.com/in/dhanush-waran-1a8512257/">LinkedIn</a>
      </div>
    </div>
    <div className="team-member">
      <img src={aswin} alt="Team Member" />
      <div className="team-member-info">
        <h4>Aswin M.A</h4>
        <p>Mentor</p>
        <p>Aswin is a technology enthusiast with a background in software development and a vision for innovative solutions.</p>
        <a href="https://www.linkedin.com/in/maaswin/">LinkedIn</a>
      </div>
    </div>
    <center><Link to='/' className="a2"><h3 className="t1"> Back to Home</h3></Link></center>
  </div>
);

export default About;
