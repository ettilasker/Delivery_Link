import { useState, useEffect } from 'react';
import { getReviewById, getAllReviews } from '../services/reviewService';

export const useReviewById = (id) => {
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const reviewData = await getReviewById(id);
        setReview(reviewData);
      } catch (error) {
        setError("Error fetching review data.");
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, [id]);

  return { review, loading, error };
};

export const useAllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewData = await getAllReviews();
        setReviews(reviewData);
      } catch (error) {
        setError("Error fetching reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, loading, error };
};
