import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { useAllUsers } from '../hooks/useUserData';
import '../css/list.css'; 

const UserList = () => {
  const { users, loading, error } = useAllUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Users</h2>
      <ul className="list-container">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              <div>
                <h3>{user.firstName} {user.lastName}</h3>
                <p>{user.email}</p>
                <p>Phone: {user.phoneNumber}</p>
              </div>
            </li>
          ))
        ) : (
          <li>No users available</li>
        )}
      </ul>
    </div>
  );
};

export default UserList;
