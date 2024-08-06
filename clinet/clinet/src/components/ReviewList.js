import React from "react";
import { useAllReviews } from "../hooks/useReviewData";
import '../css/list.css'; 

const ReviewList = () => {
  const { reviews, loading, error } = useAllReviews();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Reviews</h2>
      <ul className="list-container">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
              <div>
                <h3>{review.user.firstName} {review.user.lastName}</h3>
                <p>Grade: {review.grade}</p>
                <p>Comment: {review.comment}</p>
              </div>
            </li>
          ))
        ) : (
          <li>No reviews available</li>
        )}
      </ul>
    </div>
  );
};

export default ReviewList;
