import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/way1">Caminho 1</Link>
      <Link to="/way2">Caminho 2</Link>
    </nav>
  );
}

export default Navbar;
