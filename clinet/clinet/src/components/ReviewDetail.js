import React from 'react';
import { usePackageById } from '../hooks/usePackageData';
import { deletePackage } from '../services/packageService';
import { useNavigate } from 'react-router-dom';

const PackageDetail = ({ id }) => {
  const { packageData, loading, error } = usePackageById(id);
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!packageData) return <div>No package found</div>;

  const handleDelete = async () => {
    try {
      await deletePackage(id);
      navigate('/packages'); // Redirect to the list after deletion
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };

  return (
    <div>
      <h2>Package Details</h2>
      <h3>{packageData.address}</h3>
      <p>Destination: {packageData.addressDestination}</p>
      <p>Time: {packageData.time}</p>
      <p>Date: {packageData.data}</p>
      <h3>User Information</h3>
      <p>ID: {packageData.user.id}</p>
      <p>Name: {packageData.user.firstName} {packageData.user.lastName}</p>
      <p>Email: {packageData.user.email}</p>
      <p>Phone: {packageData.user.phoneNumber}</p>
      <button onClick={() => navigate(`/update-package/${id}`)}>Update Package</button>
      <button onClick={handleDelete}>Delete Package</button>
    </div>
  );
};

export default PackageDetail;
