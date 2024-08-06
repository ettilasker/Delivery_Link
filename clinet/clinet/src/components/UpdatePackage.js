import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useNavigate
import { getPackageById, updatePackage } from '../services/packageService';
import '../css/form.css'; 

const UpdatePackage = () => {
  const { id } = useParams(); // Get the package ID from URL
  const [packageData, setPackageData] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const data = await getPackageById(id);
        setPackageData(data);
      } catch (error) {
        console.error('Error fetching package data:', error);
      }
    };

    fetchPackageData();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await updatePackage(packageData);
      navigate(`/packages/${id}`); // Redirect to details view
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };

  if (!packageData) return <div>Loading...</div>;

  return (

    <div className='form-container'>
      <h2>Update Package</h2>
      <input
        type="text"
        value={packageData.address}
        onChange={(e) => setPackageData({ ...packageData, address: e.target.value })}
        placeholder="Enter package address"
      />
      <input
        type="text"
        value={packageData.addressDestination}
        onChange={(e) => setPackageData({ ...packageData, addressDestination: e.target.value })}
        placeholder="Enter package destination address"
      />
      <input
        type="text"
        value={packageData.time}
        onChange={(e) => setPackageData({ ...packageData, time: e.target.value })}
        placeholder="Enter package time"
      />
      <input
        type="date"
        value={packageData.data}
        onChange={(e) => setPackageData({ ...packageData, data: e.target.value })}
        placeholder="Enter package date"
      />
      <h3>User Information</h3>
      <input
        type="text"
        value={packageData.user.id}
        onChange={(e) => setPackageData({ ...packageData, user: { ...packageData.user, id: e.target.value } })}
        placeholder="User ID"
      />
      <input
        type="text"
        value={packageData.user.firstName}
        onChange={(e) => setPackageData({ ...packageData, user: { ...packageData.user, firstName: e.target.value } })}
        placeholder="User First Name"
      />
      <input
        type="text"
        value={packageData.user.lastName}
        onChange={(e) => setPackageData({ ...packageData, user: { ...packageData.user, lastName: e.target.value } })}
        placeholder="User Last Name"
      />
      <input
        type="email"
        value={packageData.user.email}
        onChange={(e) => setPackageData({ ...packageData, user: { ...packageData.user, email: e.target.value } })}
        placeholder="User Email"
      />
      <input
        type="text"
        value={packageData.user.phoneNumber}
        onChange={(e) => setPackageData({ ...packageData, user: { ...packageData.user, phoneNumber: e.target.value } })}
        placeholder="User Phone Number"
      />
      <button onClick={handleUpdate}>Update Package</button>
    </div>
  );
};

export default UpdatePackage;
