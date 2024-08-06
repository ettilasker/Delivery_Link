import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAllPackages } from '../hooks/usePackageData';
import { deletePackage } from '../services/packageService';
import '../css/list.css'; 

const PackageList = () => {
  const { packages, loading, error } = useAllPackages();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleDelete = async (id) => {
    try {
      await deletePackage(id);
      navigate(0); 
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };

  return (
    <div>
      <h2>Packages</h2>
      <ul className="list-container">
        {packages.length > 0 ? (
          packages.map((packageData) => (
            <li key={packageData.id}>
              <h3>{packageData.address}</h3>
              <p>{packageData.addressDestination}</p>
              <button onClick={() => navigate(`/packages/id/${packageData.id}`)}>Details</button>
              <button onClick={() => navigate(`/update-package/${packageData.id}`)}>Update</button>
              <button onClick={() => handleDelete(packageData.id)}>Delete</button>
            </li>
          ))
        ) : (
          <li>No packages available</li>
        )}
      </ul>
    </div>
  );
};

export default PackageList;
