import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  return (
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
  );
}

export default Skills;
