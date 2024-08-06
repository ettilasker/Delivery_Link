const API_URL = "https://localhost:7099/api/Review";

export const getReviewById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Review not found");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching review by ID:", error);
    throw error;
  }
};

export const getAllReviews = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch reviews");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching all reviews:", error);
    throw error;
  }
};

export const addReview = async (review) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });
    if (!response.ok) {
      throw new Error("Failed to add review");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};

export const updateReview = async (review) => {
  try {
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });
    if (!response.ok) {
      throw new Error("Failed to update review");
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating review:", error);
    throw error;
  }
};

export const deleteReview = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete review");
    }
    return await response.json();
  } catch (error) {
    console.error("Error deleting review:", error);
    throw error;
  }
};
