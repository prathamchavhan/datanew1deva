// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./Headers.css";


const Header = ({ showHeader }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  return (
    <header className={`main-header ${showHeader ? '' : 'hidden'}`}>
      <div className="logo-box">
        <img src="/images/dvl.png" alt="Logo" className="logo" />
      </div>

      <div className={`nav-wrapper ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><HashLink to="/#hero-section">Home</HashLink></li>

          <li
            className="dropdown-container"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <HashLink to="/#service-section" className="services-btn">
              Services
            </HashLink>

            {showServicesDropdown && (
              <ul className="services-dropdown">
                <li><Link to="/Services/CloudBI">Cloud Based BI Services</Link></li>
                <li><Link to="/Services/DataIntegration">Data Integration and Warehousing</Link></li>
                <li><Link to="/Services/DataAnalysis">Data Analysis and Visualization</Link></li>
                <li><Link to="/Services/DataManagement">Data Management and Governance</Link></li>
                <li><Link to="/Services/CorporateTraining">Corporate Training and Development</Link></li>
                <li><Link to="/Services/AppDev">Application Development</Link></li>
              </ul>
            )}
          </li>

          <li><HashLink to="/#industry-section">Industry</HashLink></li>
          <li><Link to="/Projects/Project_main">Projects</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><HashLink to="/#client-testimonials-section">About</HashLink></li>
        </ul>
      </div>

      <div className="learn-btn">
 <a href="http://localhost:5187/" target="_blank" rel="noopener noreferrer">
    Learnings
  </a>   </div>

      <div
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
