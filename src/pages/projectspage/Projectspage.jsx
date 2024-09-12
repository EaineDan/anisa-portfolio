import React from "react";
import styles from "./Projectspage.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import projectOne from "../../assests/projectOne.png";
import projectTwo from "../../assests/projectTwo.png";
import projectThree from "../../assests/projectThree.png";
import projectFour from "../../assests/projectFour.png";
import projectFive from "../../assests/projectFive.png";
import projectSix from '../../assests/projectSix.png';
import elevate from '../../assests/elevate.png';
import portfolio from '../../assests/portfolio.png';
import forage from '../../assests/forage.png';
import dashboard from '../../assests/dashboard.png';
import { FaGithub, FaGlobe } from "react-icons/fa";

const Projectspage = () => {
  return (
    <>
      <Navbar />
      <section>
        <h2 className={styles.heading}>
          My <span>Projects</span>
        </h2>
        <h2 className={styles.subhead}>
          <span>Completed</span> Projects
        </h2>
        <div className={styles.projects}>
          <div className={styles.container}>
            <img src={projectOne} alt="" className={styles.pic} />
            <div className={styles.content}>
              <h3>AgroBiz</h3>
              <h5>Ecommerce Website</h5>
              <p>
                I worked on the footer of the homepage and the routes for the
                entire webpage
              </p>
            </div>
            <div className={styles.icon}>
              <a href="#">
                <FaGlobe />
              </a>
              <a
                href="https://www.github.com/EaineDan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className={styles.container}>
            <img src={projectTwo} alt="" className={styles.pic} />
            <div className={styles.content}>
              <h3>TFLIX</h3>
              <h5>Movie App</h5>
              <p>
                Lead the execution of the project, designed the homepage,
                fetched movies using TMDB Movie API and worked on the routes for
                the webpage.
              </p>
            </div>
            <div className={styles.icon}>
              <a
                href="https://taap-tflix.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe />
              </a>
              <a
                href="https://www.github.com/EaineDan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className={styles.container}>
            <img src={projectThree} alt="" className={styles.pic} />
            <div className={styles.content}>
              <h3>Wordle</h3>
              <h5>Game App</h5>
              <p>Designed this project using Html and CSS.</p>
            </div>
            <div className={styles.icon}>
              <a
                href="https://www.github.com/EaineDan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className={styles.container}>
            <img src={projectFour} alt="" className={styles.pic} />
            <div className={styles.content}>
              <h3>TPortfolio</h3>
              <h5>Group Portfolio</h5>
              <p>Worked on the homepage and routing of the webpage.</p>
            </div>
            <div className={styles.icon}>
              <a href="#">
                <FaGlobe />
              </a>
              <a
                href="https://www.github.com/EaineDan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className={styles.container}>
            <img src={projectFive} alt="" className={styles.pic} />
            <div className={styles.content}>
              <h3>Forage</h3>
              <h5>Frontend web development</h5>
              <p>
                Created a sitemap, userflow diagram and volunteer form page for
                a non-profit organization on forage project simulation using
                html and css. Earned a certification upon successful completion.
              </p>
            </div>
            <div className={styles.icon}>
              <a href="#">
                <FaGlobe />
              </a>
              <a
                href="https://www.github.com/EaineDan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className={styles.container}>
            <img src={projectSix} alt="" className={styles.pic} />
            <div className={styles.content}>
              <h3>Recipe App</h3>
              <h5>Recipe App</h5>
              <p>
                Initially designed this project using API from Spoonacular,
                transitioned later to generate my own database to fetch data
                from.
              </p>
            </div>
            <div className={styles.icon}>
              <a
                href="https://recipe-app-pi-lovat.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe />
              </a>
              <a
                href="https://www.github.com/EaineDan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className={styles.container}>
            <img src={portfolio} alt="" className={styles.pic} />
            <div className={styles.content}>
              <h3>Nisa Portfolio</h3>
              <h5>Personal Portfolio</h5>
              <p>
                Designed my own portfolio, routed the various pages and created
                a responsive design conducive for all screen sizes
              </p>
            </div>
            <div className={styles.icon}>
              <a
                href="https://nisa-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe />
              </a>
              <a
                href="https://www.github.com/EaineDan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className={styles.container}>
            <img src={elevate} alt="" className={styles.pic} />
            <div className={styles.content}>
              <h3>NisaVille</h3>
              <h5>Think Comfort, Think Luxury</h5>
              <p>
                A real estate website that provides clients with various home
                options to choose from and luxurious apartments for ones
                comfort all with ease.{" "}
              </p>
            </div>
            <div className={styles.icon}>
              <a
                href="https://www.github.com/EaineDan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>

            <div className={styles.container}>
              <img src={dashboard} alt="" className={styles.pic} />
              <div className={styles.content}>
                <h3>Admin Dashboard</h3>
                <h5>Admin Dashboard</h5>
                <p>
                  Collaborated on a real-time group project to create and
                  design an admin dashboard using both frontend and backend
                  operations.Utilizing validation and aunthentication operators.
                </p>
              </div>
              <div className={styles.icon}>
                <a
                  href="https://www.github.com/EaineDan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className={styles.subhead}>
              <span>New </span>Projects
            </h2>
            <div className={styles.container}>
              <img src={forage} alt="" className={styles.pic} />
              <div className={styles.content}>
                <h3>Forage</h3>
                <h5>Full Stack Job Simulation</h5>
                <p>
                  A full-stack job simulation on forage following updates of
                  frontend from feedback received.
                </p>
              </div>
              <div className={styles.icon}>
                <a
                  href="https://www.github.com/EaineDan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projectspage;
