import React from 'react';
import styles from './Contactpage.module.css';
import handshake from '../../assests/handshake.jpg';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Contactpage = () => {
  return (
    <>
      <Navbar />
      <div className={`${styles.contactPageContainer} ${styles.contact}`}>
        <div
          className={`w-full lgl:w-[35%] ${styles.contactDetailsContainer} h-full bg-secondBgColor p-4 lgl:p-8 rounded-lg flex flex-col gap-8 leading-normal`}
        >
          <p className={styles.heading}>
            <span>Let's</span> Talk
          </p>
          <img
            className="w-45 h-64 object-cover rounded-lg mb-2"
            src={handshake}
            alt=""
          />
          <div className="flex flex-col gap-4">
            <h3 className="text-6xl mb-6 font-bold text-white">
              <span>Anisa Danso</span>
            </h3>
            <p className="text-4xl mb-3 font-normal text-white">
              Full Stack Web Developer
            </p>

            <p className="text-2xl text-gray-400 flex items-center gap-3">
              Phone:{" "}
              <span className="text-white">+233 248036586/ +233 501587562</span>
            </p>
            <p className="text-2xl text-gray-400 flex items-center gap-3">
              Email: <span className="text-white">eaine.dan98@gmail.com</span>
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl uppercase mb-10">Find me on</h2>
            <div className={styles.homeSci}>
              <a
                href="https://www.twitter.com/eaine_dan"
                target="_blank"
                rel="noopener"
              >
                <i class="bx bxl-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/eaine_dan"
                target="_blank"
                rel="noopener"
              >
                <i class="bx bxl-instagram"></i>
              </a>
              <a
                href="https://www.github.com/EaineDan"
                target="_blank"
                rel="noopener"
              >
                <i class="bx bxl-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/anisa-danso-018016213"
                target="_blank"
                rel="noopener"
              >
                <i class="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <section className={`${styles.contactFormContainer} ${styles.contact}`}>
          <h2 className={styles.heading}>
            <span>Contact</span> Me
          </h2>

          <form action="#">
            <div className={styles.inputBox}>
              <div className={styles.inputField}>
                <input type="text" placeholder="Full name" required />
                <span className={styles.focus}></span>
              </div>

              <div className={styles.inputField}>
                <input type="text" placeholder="Email Address" required />
                <span className={styles.focus}></span>
              </div>
            </div>

            <div className={styles.inputBox}>
              <div className={styles.inputField}>
                <input type="text" placeholder="Mobile Number" required />
                <span className={styles.focus}></span>
              </div>

              <div className={styles.inputField}>
                <input type="text" placeholder="Email Subject" required />
                <span className={styles.focus}></span>
              </div>
            </div>

            <div className={styles.textareaField}>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
                required
              ></textarea>
              <span className={styles.focus}></span>
            </div>

            <div className={`${styles.btnBox} ${styles.btns}`}>
              <button type="submit" className={styles.btn}>
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Contactpage;
