import React from 'react';
import '../assets/css/bootstrap.min.css';
import logo from '../assets/img/logo.png'

function Header() {
  return (
    <header className="sticky">
      <nav className="navbar navbar-expand-lg main-nav" style={{ zIndex: 99 }}>
        <div className="container-fluid px-lg-5">
          <a className="navbar-brand" href="index.php">
            <img src={logo} alt="logo" width="130" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars "></i>
          </button>
          {/* Your search form code can be added here */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="javascript:void();" data-bs-toggle="modal" data-bs-target="#myModal">
                  Explore Residences
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.php">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="properties.php">
                  Properties
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="team.php">
                  Our Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="partners.php">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
