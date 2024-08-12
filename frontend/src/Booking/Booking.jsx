// src/components/Book.js

import React, { useState } from 'react';
import '../Booking/Booking.css';  // Optional: Import a CSS file for styling
import { Link } from "react-router-dom";

const toursData = [
  { id: 1, name: 'Golden Temple,Amritsar', price: 20000, description: 'A wonderful summer vacation.' },
  { id: 2, name: 'Red Fort,Delhi', price: 30000, description: 'Explore the archietecture of this wonder.' },
  { id: 3, name: 'Aguada,Goa ', price: 15000, description: 'Experience the Great wonder og India.' },
];

const Booking = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (tour) => {
    setCart([...cart, tour]);
    alert(`${tour.name} added to cart!`);
  };

  return (
    <div className="book-container">
      <h1>Book a Tour</h1>
      <div className="tours-list">
        {toursData.map((tour) => (
          <div key={tour.id} className="tour">
            <h2>{tour.name}</h2>
            <p>{tour.description}</p>
            <p>Price: ${tour.price}</p>
            <button onClick={() => addToCart(tour)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      <div className="cart">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name} - ${item.price}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty. <Link to='/info' className="a2"><h3 className="t1"> Book Now!</h3></Link></p>
        )}
        <div><center><Link to='/' className="a2"><h3 className="t1"> Back to Home</h3></Link></center></div>
      </div>
      <div></div>
    </div>
  );
};

export default Booking;
