import React, { useState } from "react";
import { addReview } from "../services/reviewService";
import "../css/form.css"; 

const AddReview = () => {
  const [grade, setGrade] = useState("");
  const [comment, setComment] = useState("");
  const [userId, setUserId] = useState("");
  const [date, setDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleAddReview = async () => {
    try {
      const review = {
        grade,
        comment,
        userId,
        date,
        user: {
          id: Number(userId), // Convert to number
          firstName,
          lastName,
          email,
          phoneNumber,
        },
      };
      await addReview(review);
      setUserId("");
      setDate("");
      setGrade("");
      setComment("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Review</h2>
      <form>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          placeholder="Enter review grade"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter review comment"
        />
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user id"
        />
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter user first name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter user last name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter user email"
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter user phone number"
        />
        <button type="button" onClick={handleAddReview}>
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
