import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <a href="#home" className={styles.logo}>
          <span>A</span>nisa.
        </a>
      </Link>
      <div className="bx-bx-menu text-3xl text-gray-700 cursor-pointer"></div>
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
  );
}

export default Navbar;
