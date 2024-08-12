import React, { useState } from 'react';
import '../Contact/Contact.css';
import { Link } from "react-router-dom";


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    alert('Thank you for contacting us!');
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className='digi'>
        <center>
        <a href="https://www.instagram.com/">Instagram</a>
        <br />
        <a href="https://www.linkedin.com/in/dhanush-waran-1a8512257/">LinkedIn</a>
        <br />
        <a href="dhanushwaran32@gmail.com">Mail</a>
        <br />
        <h3>Phone:8825990000</h3>
        </center>
      </div>
      <div>
      <center><Link to='/' className="a2"><h3 className="t1"> Back to Home</h3></Link></center>
      </div>
    </div>
  );
};

export default Contact;
