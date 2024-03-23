import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Connect</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mynetwork">My Network</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/messaging">Messaging</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          <li className="dropdown">
            <button className="dropbtn">Me</button>
            <div className="dropdown-content">
              <Link to="/edit">Edit Profile</Link>
              <Link to="/addpost">Addpost</Link>
              <Link to="/help">Help</Link>
              <Link to="/">logout</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
