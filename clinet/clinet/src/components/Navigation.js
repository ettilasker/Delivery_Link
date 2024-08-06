

import React from "react";
import { Link } from "react-router-dom";
import '../css/Navigation.css';

import myImage from '../image/track.jpg';

function Navigation() {
  return (
    <nav>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <img src={myImage} alt="Logo" style={{ width: '90px', height: '70px', marginRight: '10px' }} />
        <ul>
          <li>
            <Link to="/packages">Package List</Link>
          </li>
          <li>
            <Link to="/user">User List</Link>
          </li>
          <li>
            <Link to="/reviews">Review List</Link>
          </li>
          <li>
            <Link to="/add-package">Add Package</Link>
          </li>
          <li>
            <Link to="/user/add">Add user</Link>
          </li>
          <li>
            <Link to="/reviews/add">add review</Link>
          </li>
          <li>
            <Link to="/package/address/:a/:b">by address</Link>
          </li>
        </  ul>
      </div>
    </nav>
  );
}

export default Navigation;