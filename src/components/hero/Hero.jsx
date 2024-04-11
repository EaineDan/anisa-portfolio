import React from 'react';
import styles from './Hero.module.css';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className={styles.home}>
      <div className={styles.homeContent}>
        <h1>
          Hi, I'm <span className="text-mainColor">Anisa Danso</span>
        </h1>
        <div className={styles.textAnimate}>
          <h3>Full Stack Web Developer</h3>
        </div>
        <p>Knack for building front-end and backend operations</p>
        <div className={styles.btnBox}>
          <Link to="/contact">
            <a href="#" className={styles.btn}>
              Hire Me
            </a>
          </Link>
          <a href="AnisaCv.pdf" download="AnisaCv.pdf" className={styles.btn}>
            Resume
          </a>
        </div>
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
      <div class={styles.homeImgHover}></div>
    </section>
  );
}

export default Hero;
