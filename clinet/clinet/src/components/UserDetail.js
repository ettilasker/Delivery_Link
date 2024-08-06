import React from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate

import { getUserByPhoneNumber } from "../services/userService"; // Import getUserByPhoneNumber service function
import { deleteUser } from "../services/userService";

const UserDetail = () => {
  const { phoneNumber } = useParams(); 
  const { UserData, loading, error } = getUserByPhoneNumber(phoneNumber);
  const navigate = useNavigate(); // Hook for navigation

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!UserData) return <div>No user found</div>;

  const handleDelete = async () => {
    try {
      await deleteUser(UserData.id);
      navigate("/users"); // Redirect to the list after deletion
    } catch (error) {
      console.error("Error deleting package:", error);
    }
  };

  return (
    <div>
      <h2>User Details</h2>
  
      
      <p>first name {UserData.time}</p>
      <p>last name {UserData.lastName}</p>
      <p>Email: {UserData.email}</p>
      <p>Phone: {UserData.phoneNumber}</p>
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
};

export default UserDetail;
