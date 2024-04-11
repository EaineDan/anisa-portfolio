import React from 'react';
import styles from './Skillspage.module.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiFigma,
  SiHtml5,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const Skillspage = () => {
  return (
    <>
      <Navbar />
      <section className={styles.skills}>
        <h2 className={styles.heading}>
          My <span>Skills</span>
        </h2>

        <div className={styles.skillsRow}>
          <div className={styles.skillsColumn}>
            <h3 className={styles.title}>Coding Skills</h3>

            <div className={styles.skillsBox}>
              <div className={styles.skillsContent}>
                <div className={styles.progress}>
                  <h3>
                    HTML <span>90%</span>
                  </h3>
                  <div className={styles.bar}>
                    <span></span>
                  </div>
                </div>

                <div className={styles.progress}>
                  <h3>
                    CSS <span>80%</span>
                  </h3>
                  <div className={styles.bar}>
                    <span></span>
                  </div>
                </div>

                <div className={styles.progress}>
                  <h3>
                    Javascript <span>70%</span>
                  </h3>
                  <div className={styles.bar}>
                    <span></span>
                  </div>
                </div>

                <div className={styles.progress}>
                  <h3>
                    React <span>80%</span>
                  </h3>
                  <div className={styles.bar}>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.skillsColumn}>
            <h3 className={styles.title}>Professional Skills</h3>

            <div className={styles.skillsBox}>
              <div className={styles.skillsContent}>
                <div className={styles.progress}>
                  <h3>
                    Web Design <span>90%</span>
                  </h3>
                  <div className={styles.bar}>
                    <span></span>
                  </div>
                </div>

                <div className={styles.progress}>
                  <h3>
                    Web Development <span>85%</span>
                  </h3>
                  <div className={styles.bar}>
                    <span></span>
                  </div>
                </div>

                <div className={styles.progress}>
                  <h3>
                    Graphic Design <span>80%</span>
                  </h3>
                  <div className={styles.bar}>
                    <span></span>
                  </div>
                </div>

                <div className={styles.progress}>
                  <h3>
                    UI/UX Design <span>85%</span>
                  </h3>
                  <div className={styles.bar}>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.best}>
        <p className="text-bold text-xl cursor-pointer">Best Skills in</p>
        <div className="flex flex-wrap justify-center mt-4 bg-transparent">
          <SiFigma className="text-purple-500 text-3xl m-2" />
          <FaReact className="text-blue-500 text-lg m-2" />
          <SiBootstrap className="text-orange-500 text-2xl m-2" />
          <SiMongodb className="text-green-600 text-2xl m-2" />
          <SiHtml5 className="text-red-500 text-xl m-2" />
          <SiCss3 className="text-blue-500 text-xl m-2" />
          <SiTailwindcss className="text-teal-500 text-2xl m-2" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Skillspage;
