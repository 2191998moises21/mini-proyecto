/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const NavBar = ({ handleSearchTextChange, handleGuestsChange }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isNavOpen ? 'open' : ''}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="src/img/logo.svg" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <input
                type="text"
                className="nav-link form-control"
                placeholder="Buscar por ciudad"
                onChange={handleSearchTextChange}
              />
            </li>
            <li className="nav-item">
              <input
                type="number"
                className="nav-link form-control"
                placeholder="Número de invitados"
                onChange={handleGuestsChange}
              />
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="bi bi-search text-danger"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

