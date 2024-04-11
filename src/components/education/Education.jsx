import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  return (
    <section className={styles.education}>
      <h2 className={styles.heading}>
        My <span>Journey</span>
      </h2>

      <div className={styles.educationRow}>
        <div className={styles.educationColumn}>
          <h3 className={styles.title}>Education</h3>
          <div className={styles.educationBox}>
            <div className={styles.educationContent}>
              <div className={styles.content}>
                <div className={styles.year}>
                  <i class="bx bxs-calendar"></i>2024 - date
                </div>
                <h3>Full Stack Web Development - MEST AFrica</h3>
                <p>
                  Training as a full stack web developer to build responsive,
                  interactive and functional websites to enhance user
                  experience.{" "}
                </p>
              </div>
            </div>

            <div className={styles.educationContent}>
              <div className={styles.content}>
                <div className={styles.year}>
                  <i class="bx bxs-calendar"></i>2016 - 2020
                </div>
                <h3>
                  BSC Environmental Science - Kwame Nkrumah University of
                  Science and Technology
                </h3>
                <p>
                  A degree program that analyzes environmental systems, the
                  threats it faces and the possible solutions to mitigate those
                  effects.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.educationColumn}>
          <h3 className={styles.title}>Experience</h3>
          <div className={styles.educationBox}>
            <div className={styles.educationContent}>
              <div className={styles.content}>
                <div className={styles.year}>
                  <i class="bx bxs-calendar">2024 - Date</i>
                </div>
                <h3>Web Development</h3>
                <p>
                  Collaborating effectively and efficiently on group projects
                  and working on individual projects
                </p>
              </div>
            </div>

            <div className={styles.educationContent}>
              <div className={styles.content}>
                <div className={styles.year}>
                  <i class="bx bxs-calendar">2020 - Date</i>
                </div>
                <h3>Graphic Designer</h3>
                <p>
                  Designing beautiful and catchy fliers, invitation cards and
                  anything graphics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
