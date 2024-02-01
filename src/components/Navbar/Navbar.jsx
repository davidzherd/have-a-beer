import React from "react";
import logo from "../assets/logo.png";
import "./navbar.css";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="main-navigation">
        <img src={logo} alt="Company Logo" className="logo" />
        <ul className="navigation-list">
          <li>
            <Link to="/" className="remove-link-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="findabeer" className="remove-link-colors">
              Find a Beer
            </Link>
          </li>
          <li>
            <Link to="contact" className="remove-link-colors">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
