import React from 'react';
import styles from './Skillspage.module.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';



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
      <div>
        <p className={styles.heading}>
          Best <span>Skills in</span>
        </p>
        <div className={styles.iconbox}>
          <div className="text-red-500">
            <i class="bx bxl-figma"></i>
            <p>
              Figma
            </p>
          </div>
          <div className="text-blue-500">
            <i class="bx bxl-tailwind-css"></i>
            <p>
              Tailwind
            </p>
          </div>
          <div className="text-gray-500">
            <i class="bx bxl-bootstrap"></i>
            <p>
              Bootstrap
            </p>
          </div>
          <div className="text-red-500">
            <i class="bx bxl-html5"></i>
            <p>
             Html
            </p>
          </div>
          <div className="text-blue-500">
            <i class="bx bxl-css3"></i>
            <p>
            CSS
            </p>
          </div>
          <div className="text-yellow-500">
            <i class="bx bxl-javascript"></i>
            <p>
              Javascript
            </p>
          </div>
          <div className="text-blue-500">
            <i class="bx bxl-react"></i>
            <p>
              React
            </p>
          </div>
          <div className="text-green-700">
            <i class="bx bxl-mongodb"></i>
            <p>
              MongoDb
            </p>
          </div>
          <div className="text-blue-500">
            <i class="bx bxl-nodejs"></i>
            <p>
              Nodejs
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Skillspage;
