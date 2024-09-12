import React, { useState } from "react";
import styles from "./Projects.module.css";
import ProjectOne from "../../assests/projectOne.png";
import ProjectTwo from "../../assests/projectTwo.png";
import ProjectThree from "../../assests/projectThree.png";
import ProjectFour from "../../assests/projectFour.png";
import ProjectFive from "../../assests/projectFive.png";
import ProjectSix from "../../assests/projectSix.png";
import { Link } from "react-router-dom";

const projects = [
  { title: "Agro-Biz", image: ProjectOne },
  { title: "TFLIX", image: ProjectTwo },
  { title: "Wordle", image: ProjectThree },
  { title: "T-Portfolio", image: ProjectFour },
  { title: "Forage", image: ProjectFive },
  { title: "Recipe App", image: ProjectSix },
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}>
        My <span className="text-mainColor">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 text-3xl lg:grid-cols-3 min-h-84 gap-12 mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500"
          >
            <Link to="/projects">
              <img
                src={project.image}
                alt=""
                className="w-full h-72 object-center"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
