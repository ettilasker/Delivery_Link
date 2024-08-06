const API_URL = "https://localhost:7099/api/Package";

export const getPackageById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/id/${id}`);
    
    if (!response.ok) {
      throw new Error("Package not found");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching package by ID:", error);
    throw error;
  }
};
export const GetByAddress = async (a, b) => {
  try {
    const response = await fetch(`${API_URL}/address/${a}/${b}`);

    if (!response.ok) {
      throw new Error('Packages not found, try another address');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching package by address:', error);
    throw error;
  }
};


export const getAllPackages = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch packages");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching all packages:", error);
    throw error;
  }
};

export const addPackage = async (packageData) => {
  try {
    console.log("Sending package data:", packageData);
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(packageData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response data:", errorData);
      throw new Error("Failed to add package");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding package:", error);
    throw error;
  }
};

export const updatePackage = async (packageData) => {
  try {
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(packageData),
    });
    if (!response.ok) {
      throw new Error("Failed to update package");
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating package:", error);
    throw error;
  }
};


export const deletePackage = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete package");
    }
    return await response.json();
  } catch (error) {
    console.error("Error deleting package:", error);
    throw error;
  }
};
