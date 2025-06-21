import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>LilyCakes</span>
    </nav>
  );
}

export default Navbar;
