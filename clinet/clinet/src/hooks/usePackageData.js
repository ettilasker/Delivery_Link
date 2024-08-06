import { useState, useEffect } from 'react';
import { getPackageById, getAllPackages } from '../services/packageService';

// Custom hook to fetch package data by ID
export const usePackageById = (id) => {
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackage = async () => {
      setLoading(true); // Set loading to true before starting fetch
      try {
        const data = await getPackageById(id);
        setPackageData(data);
        setError(null); // Clear previous errors if data is fetched successfully
      } catch (err) {
        setError("Error fetching package data.");
        setPackageData(null); // Clear previous data in case of an error
      } finally {
        setLoading(false); // Set loading to false once fetch is complete
      }
    };

    if (id) {
      fetchPackage();
    }
  }, [id]);

  return { packageData, loading, error };
};

// Custom hook to fetch all packages
export const useAllPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true); // Set loading to true before starting fetch
      try {
        const data = await getAllPackages();
        setPackages(data);
        setError(null); // Clear previous errors if data is fetched successfully
      } catch (err) {
        setError("Error fetching packages.");
        setPackages([]); // Clear previous packages in case of an error
      } finally {
        setLoading(false); // Set loading to false once fetch is complete
      }
    };

    fetchPackages();
  }, []);

  return { packages, loading, error };
};
