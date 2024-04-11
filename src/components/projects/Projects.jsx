import React, {useState} from "react";
import styles from "./Projects.module.css";
import ProjectOne from "../../assests/projectOne.png";
import ProjectTwo from "../../assests/projectTwo.png";
import ProjectThree from "../../assests/projectThree.png";
import ProjectFour from "../../assests/projectFour.png";
import ProjectFive from "../../assests/projectFive.png";
import ProjectSix from "../../assests/projectSix.png";

const projects = [
  { title: "Agro-Biz", image: ProjectOne },
  { title: "TFLIX", image: ProjectTwo},
  { title: "Wordle", image: ProjectThree},
  { title: "T-Portfolio", image: ProjectFour},
  { title: "Forage", image: ProjectFive},
  { title: "Recipe App", image: ProjectSix},
];

  

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}>
        My <span className="text-mainColor">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden border-2 border-mainColor"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-center"
            />
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                hoveredProject === index ? "opacity-90" : "opacity-20"
              }`}
            >
              <div className="text-white text-center">
                <h3 className="text-2xl mb-2 text-mainColor">
                  {project.title}
                </h3>
                {/* Add more project details here if needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
