import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        <p>Copyright &copy; 2024 by Anisa || All rights Reserved.</p>
      </div>

      <div className={styles.footerIconTop}>
        <a href="#">
          <i class="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
