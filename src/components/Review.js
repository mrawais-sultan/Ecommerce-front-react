import React, { useState } from 'react';
import './Review.css';

const Review = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { rating, comment }]);
    setRating(0);
    setComment('');
  };

  return (
    <div className="review">
      <h3>Reviews</h3>
      <form onSubmit={handleSubmit}>
        <div className="review-form">
          <label>Rating:</label>
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            <option value="0">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="review-form">
          <label>Comment:</label>
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>
        <button type="submit">Submit Review</button>
      </form>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <p><strong>Rating:</strong> {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
