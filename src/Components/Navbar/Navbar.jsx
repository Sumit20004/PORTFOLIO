import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Logo */}
      <div className="nav-logo">
        <h1>
          Sumit<span>Chaira</span>
        </h1>
      </div>

      {/* Center Menu */}
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Right Button */}
      <a href="#contact" className="nav-connect">Connect</a>
    </nav>
  );
};

export default Navbar;
