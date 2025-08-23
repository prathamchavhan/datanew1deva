// src/components/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Headers.css";

const Header = ({ showHeader }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  // Create refs for the menu and the burger icon
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  // This effect adds a click listener to the document to close the menu
  // when a user clicks outside of it.
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Do nothing if the click is on the burger icon or inside the menu
      if (
        burgerRef.current?.contains(event.target) ||
        navRef.current?.contains(event.target)
      ) {
        return;
      }
      // Otherwise, close the menu
      setMenuOpen(false);
    };

    // Add the event listener when the menu is open
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup: remove the event listener when the component unmounts or menu closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]); // This effect depends on the menuOpen state

  // This function is for FINAL navigation links. It closes everything.
  const handleLinkClick = () => {
    setMenuOpen(false);
    setShowServicesDropdown(false);
  };

  // This function handles clicks on the "Services" button itself.
  const handleServicesToggle = (e) => {
    e.preventDefault(); // Stop the link from navigating
    setShowServicesDropdown((prev) => !prev); // Toggle the dropdown
  };

  return (
    <header className={`main-header ${showHeader ? "" : "hidden"}`}>
      <div className="logo-box">
        <img src="images/dvl.png" alt="Logo" className="logo" />
      </div>

      {/* Attach the ref to the navigation wrapper */}
      <div ref={navRef} className={`nav-wrapper ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <HashLink to="/#hero-section" onClick={handleLinkClick}>
              Home
            </HashLink>
          </li>

          <li
            className="dropdown-container"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <HashLink
              to="/#service-section"
              className="services-btn"
              onClick={handleServicesToggle}
            >
              Services
            </HashLink>

            {showServicesDropdown && (
              <ul className="services-dropdown">
                <li>
                  <Link to="/Services/CloudBI" onClick={handleLinkClick}>
                    Cloud Based BI Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/DataIntegration"
                    onClick={handleLinkClick}
                  >
                    Data Integration and Warehousing
                  </Link>
                </li>
                <li>
                  <Link to="/Services/DataAnalysis" onClick={handleLinkClick}>
                    Data Analysis and Visualization
                  </Link>
                </li>
                <li>
                  <Link to="/Services/DataManagement" onClick={handleLinkClick}>
                    Data Management and Governance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/CorporateTraining"
                    onClick={handleLinkClick}
                  >
                    Corporate Training and Development
                  </Link>
                </li>
                <li>
                  <Link to="/Services/AppDev" onClick={handleLinkClick}>
                    Application Development
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <HashLink to="/#industry-section" onClick={handleLinkClick}>
              Industry
            </HashLink>
          </li>
          <li>
            <Link to="/Projects/Project_main" onClick={handleLinkClick}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/careers" onClick={handleLinkClick}>
              Careers
            </Link>
          </li>
          <li>
            <HashLink
              to="/#client-testimonials-section"
              onClick={handleLinkClick}
            >
              About
            </HashLink>
          </li>
        </ul>
      </div>

      <div className="learn-btn">
        <a
          href="https://pratham0.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          Learnings
        </a>
      </div>

      {/* Attach the ref to the burger menu icon */}
      <div
        ref={burgerRef}
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
