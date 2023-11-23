import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul className="navbar-nav ms-auto align-items-center">
      <li className="nav-item">
        <Link  class="nav-link " to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link  class="nav-link " to="/about">About Us</Link>
      </li>
      <li className="nav-item">
        <Link  class="nav-link " to="/properties">Properties</Link>
      </li>
      <li className="nav-item">
        <Link  class="nav-link " to="/team">Our Team</Link>
      </li>
      <li className="nav-item">
        <Link  class="nav-link " to="/partners">Partner With Us</Link>
      </li>
    </ul>
  );
}

export default Navigation;
