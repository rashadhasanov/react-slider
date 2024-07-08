import React from "react";

const Review = ({ review }) => {
  return (
    <div>
      <div className="img-container">
        <span className="quote-icon">”</span>
        <img src={review.image} alt={review.name} />
      </div>
      <h4 className="name">{review.name}</h4>
      <p className="job">{review.job}</p>
      <p className="text">{review.text}</p>
    </div>
  );
};

export default Review;
