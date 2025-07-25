import { useState } from "react";
import "../Styles/Navbar.scss";
import { assets } from "../assets/assest";
function Navbar() {
  return (
    <div className="navbar">
      <img src={assets.logo2} alt="" className="logo" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Catalog</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className="mavbar-right">
        <form action="#">
          <input
            type="text"
            name="search-item"
            placeholder="Search item "
            id="search"
          />
          <button>
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
