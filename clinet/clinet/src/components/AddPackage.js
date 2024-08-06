import React, { useState } from "react";
import { addPackage } from "../services/packageService";
import '../css/form.css'; 

const AddPackage = () => {
  const [address, setAddress] = useState("");
  const [addressDestination, setAddressDestination] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState("");
  const [userId, setUserId] = useState(""); // Keep as string
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleAddPackage = async () => {
    try {
      const packageData = {
        address,
        addressDestination,
        time,
        data,
        user: {
          id: Number(userId), // Convert to number
          firstName,
          lastName,
          email,
          phoneNumber
        }
      };
      await addPackage(packageData);  
     
      setAddress("");
      setAddressDestination("");
      setTime("");
      setData("");
      setUserId("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
    } catch (error) {
      console.error("Error adding package:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Package</h2>
      <form>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter package address"
        />
        <input
          type="text"
          value={addressDestination}
          onChange={(e) => setAddressDestination(e.target.value)}
          placeholder="Enter package destination address"
        />
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter package time"
        />
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID"
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
        <button type="button" onClick={handleAddPackage}>Add Package</button>
      </form>
    </div>
  );
};

export default AddPackage;
