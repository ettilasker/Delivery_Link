import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePackageById } from '../hooks/usePackageData';
import { deletePackage } from '../services/packageService';

const PackageDetail = () => {
  const { id } = useParams(); // Get the package ID from URL
  const { packageData, loading, error } = usePackageById(id);
  const navigate = useNavigate(); // Hook for navigation

  // Check loading state
  if (loading) return <div>Loading...</div>;

  // Check if there was an error fetching the package
  if (error) return <div>{error}</div>;

  // Check if packageData is available
  if (!packageData) return <div>No package found</div>;

  // Handle deletion of package
  const handleDelete = async () => {
    try {
      await deletePackage(id);
      navigate('/packages'); // Redirect to the list after deletion
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };

  return (
    <div className='form-container'>
      <h2>Package Details</h2>
      <h3>{packageData.address || 'No address available'}</h3>
      <p>Destination: {packageData.addressDestination || 'No destination available'}</p>
      <p>Time: {packageData.time || 'No time available'}</p>
      <p>Date: {packageData.date || 'No date available'}</p>
      <h3>User Information</h3>
      <p>ID: {packageData.user?.id || 'No user ID available'}</p>
      <p>Name: {packageData.user?.firstName} {packageData.user?.lastName || 'No user name available'}</p>
      <p>Email: {packageData.user?.email || 'No user email available'}</p>
      <p>Phone: {packageData.user?.phoneNumber || 'No user phone number available'}</p>
      <button onClick={() => navigate(`/update-package/${id}`)}>Update Package</button>
      <button onClick={handleDelete}>Delete Package</button>
    </div>
  );
};

export default PackageDetail;
