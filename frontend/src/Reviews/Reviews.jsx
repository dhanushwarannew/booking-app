import React, { useState } from 'react';
import './Reviews.css';
import { Link } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    
  
    {
      id: 1,
      name: 'Dhanushwaran.S',
      rating: 4,
      comment: 'Good application with user friendly manner.',
      date: '2024-06-5'
    }
  ]);

  const [form, setForm] = useState({
    name: '',
    rating: '',
    comment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      name: form.name,
      rating: parseInt(form.rating),
      comment: form.comment,
      date: new Date().toISOString().split('T')[0]
    };
    setReviews([...reviews, newReview]);
    setForm({ name: '', rating: '', comment: '' });
  };

  return (
    <div className="reviews-container">
      <h2>Customer Reviews</h2>
      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={form.rating}
          onChange={handleInputChange}
          min="1"
          max="5"
          required
        />
        <textarea
          name="comment"
          placeholder="Your Comment"
          value={form.comment}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit">Add Review</button>
      </form>
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <div className="review-header">
            <h3 className="review-name">{review.name}</h3>
            <span className="review-rating">Rating: {review.rating}/5</span>
          </div>
          <p className="review-comment">{review.comment}</p>
          <span className="review-date">{new Date(review.date).toLocaleDateString()}</span>
          <div><center><Link to='/' className="a2"><h3 className="t1"> Back to Home</h3></Link></center></div>
        </div>
        
      ))}
    </div>
  );
};

export default Reviews;
