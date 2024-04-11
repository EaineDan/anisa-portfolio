import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between items-center text-white py-5 px-10 h-48 bg-BgColor w-full">
        <div>
          <a href="#home" className={styles.logo}>
            <span>A</span>nisa.
          </a>
        </div>
        <div>
          <ul className="flex justify-between gap-10 font-medium py-6">
            <li>
              <Link to="/about">
                <span className="text-3xl text-white relative hover:text-mainColor duration-300 hover:underline hover:underline-offset-8 group cursor-pointer">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <span className="text-3xl text-white relative hover:text-mainColor hover:underline hover:underline-offset-8 duration-300 group cursor-pointer">
                  Projects
                </span>{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/skills">
                <span className="text-3xl text-white relative hover:text-mainColor hover:underline hover:underline-offset-8 duration-300 group cursor-pointer">
                  Skills
                </span>{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.homeSci}>
          <a
            href="https://www.twitter.com/eaine_dan"
            target="_blank"
            rel="noopener"
          >
            <i class="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/eaine_dan"
            target="_blank"
            rel="noopener"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.github.com/EaineDan"
            target="_blank"
            rel="noopener"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anisa-danso-018016213"
            target="_blank"
            rel="noopener"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
      <hr className="border-none h-0.5 w-full bg-mainColor " />
      <div className="w-full py-10 bg-BgColor">
        <p className="text-center text-gray-500 text-2xl">
          © 2024 Personal Portfolio. All rights reserved Inc.
        </p>
      </div>
      ;
    </div>
  );
}

export default Footer;
