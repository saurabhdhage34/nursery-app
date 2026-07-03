import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo_dhage.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4">

      {/* ✅ Logo */}
      <Link className="navbar-brand logo" to="/">
        <img 
          src={logo} 
          alt="logo"
          className="logo-img"
        />
        
      </Link>

      {/* Mobile Toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto nav-links">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/plants">Plants</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="d-flex align-items-center gap-3 nav-right">

          <FaShoppingCart className="icon" />
          <FaUser className="icon" />

          {/* Search Box */}
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search plants..."  />
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;