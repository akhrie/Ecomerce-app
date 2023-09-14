import React, { useState } from 'react';
import { FaBars, FaShoppingCart, FaBell, FaSearch } from 'react-icons/fa';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/*navbar  Toggle button */}
          <button className="navbar-toggler" type="button" onClick={toggleNav}>
            <FaBars />
          </button>
          {/* Collapsible wrapper */}
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
            {/* Navbar brand */}
            <a className="navbar-brand mt-2 mt-lg-0" Link to="#">
              <span className="color-wave-text">F2F</span>
            </a>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" Link to="#">
             Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" Link to="#">
              About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" Link to="#">
            Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" Link to="#">
          Customer Care
                </a>
              </li>
              <li>
                  {/*Search bar*/}
                <div className="input-group">
                  <div className="form-outline">
                    <input type="search" id="form1" className="form-control" />
                  </div>
                  <button type="button" className="btn btn-primary">
                    <FaSearch />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        
          {/* Right elements */}
          <div className="d-flex align-items-center">
            {/* Shoping Icon */}
            <a className="text-reset me-3" Link to="#">
              <FaShoppingCart />
            </a>
            {/* Notifications */}
            <div className="dropdown">
              <a
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                Link to="#"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <FaBell />
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" Link to="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" Link to="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" Link to="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            {/* Avatar */}
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                Link to="#"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
              <img
                src={process.env.PUBLIC_URL + '/Image/profile.jpg'}
                className="rounded-circle"
                height={25}
                alt="Profile"
                loading="lazy"
              />
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" Link to="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" Link to="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" Link to="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </div>
  );
}

export default Navbar;
