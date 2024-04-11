import React from 'react';
import styles from './Projectspage.module.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Projectspage = () => {
   return (
    <>
      <Navbar />
      <section className={styles.projects}>
        <h2 className={styles.heading}>
          My <span className="text-mainColor">Projects</span>
        </h2>
      </section>
      <Footer />
    </>
  );
}


export default Projectspage;
