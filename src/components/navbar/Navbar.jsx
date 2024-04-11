import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
        <Link to="/">
          <a href="#home" className={styles.logo}>
            <span>A</span>nisa.
          </a>
        </Link>
        <nav className={styles.navbar}>
          <Link to="/">
            <a href="#home" className={styles.active}>
              Home
            </a>
          </Link>
          <Link to="/about">
            <a href="#about">About</a>
          </Link>
          <Link to="/education">
            <a href="#education">Education</a>
          </Link>
          <Link to="/skills">
            <a href="#skills">Skills</a>
          </Link>
          <Link to="/projects">
            <a href="#projects">Projects</a>
          </Link>
          <Link to="/contact">
            <a href="#contact">Contact</a>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
