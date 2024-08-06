import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetByAddress } from "../services/packageService";
import "../css/list.css";

const PackageByAddress = () => {
  const { a, b } = useParams();
  const [addressA, setAddressA] = useState(a || "");
  const [addressB, setAddressB] = useState(b || "");
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching packages with", addressA, addressB);
    const fetchPackages = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await GetByAddress(addressA, addressB);
        console.log("Data received:", data);
        setPackages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (addressA && addressB) {
      fetchPackages();
    }
  }, [addressA, addressB]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Navigating to:", `/package/address/${addressA}/${addressB}`);
    navigate(`/package/address/${addressA}/${addressB}`);
  };

  return (
    <div className="form-container">
      <h1>Search Packages by Address</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Address A:
            <input
              type="text"
              value={addressA}
              onChange={(e) => setAddressA(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address B:
            <input
              type="text"
              value={addressB}
              onChange={(e) => setAddressB(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Search</button>
      </form>
      <div className="list-container">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {!loading && !error && (
          <ul>
            {packages.map((pkg) => (
              <li key={pkg.id}>
                <div>
                  <h3>{pkg.address}</h3>
                  <p>{pkg.addressDestination}</p>
                  <button onClick={() => navigate(`/packages/id/${pkg.id}`)}>
                    View Details
                  </button>
                  <button onClick={() => navigate(`/update-package/${pkg.id}`)}>
                    Update
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PackageByAddress;
