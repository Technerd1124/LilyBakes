import { useState } from "react";
import "./Styles/Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Lily Cakes</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
