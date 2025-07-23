import { useState } from "react";
import "../Styles/Navbar.scss";
import { assets } from "../assets/assest";
function Navbar() {
  return (
    <div
      className="navbar"
      style={{ border: "2px solid black" }}
    >
      <img src={assets.logo2} alt="" className="logo"/>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Catalog</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className="mavbar-right"></div>
    </div>
  );
}

export default Navbar;
