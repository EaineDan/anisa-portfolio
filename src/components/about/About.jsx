import React from 'react';
import styles from './About.module.css';
import aboutImage from '../../assests/about.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.heading}>
        About <span>Me</span>
      </h2>

      <div className={styles.aboutImg}>
        <img src={aboutImage} alt="" className={styles.me} />
        <span className={styles.circleSpin}></span>
      </div>

      <div class={styles.aboutContent}>
        <h3>Full Stack Web Developer</h3>
        <p>
          Dedicated and innovative web developer adept at creating captivating
          and user-centric websites. Demonstrates mastery in CSS frameworks like
          Tailwind, Bootstrap, and Material UI, ensuring seamless and responsive
          designs. Possesses outstanding graphic design skills and an in-depth
          understanding of UI/UX principles to deliver exceptional user
          experiences. Proficient in React for building dynamic and interactive
          front-end components, as well as Node.js and MongoDb for scalable and
          efficient backend development. Skilled in leveraging backend
          technologies to create robust and secure web applications.
          Collaborative team player with a strong commitment to continuous
          learning and staying abreast of industry advancements.
        </p>
        <div className={`${styles.btnBox} ${styles.btns}`}>
          <Link to="/about">
            <a href="#" className={styles.btn}>
              Read More
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
