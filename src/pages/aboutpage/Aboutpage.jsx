import React from 'react';
import styles from './Aboutpage.module.css';
import { AiFillAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import aboutme from '../../assests/aboutme.jpg';


const services = [
  {
    id: 1,
    icon: <AiFillAppstore />,
    title: "Front-end Development",
    des: "Abreast with the use of html, css, javascript, react and various css frameworks for creative responsive designs",
  },
  {
    id: 2,
    icon: <AiFillAppstore />,
    title: "Backend Development",
    des: "The Mastermind behind every effective and responsive website",
  },
  {
    id: 3,
    icon: <SiAntdesign />,
    title: "UI/UX Design",
    des: "Creative designs has always been a hallmark for excellence",
  },
  {
    id: 4,
    icon: <FaGlobe />,
    title: "Hosting Websites",
    des: "i use Vercel for hosting front-end applications and Render for hosting backend applications",
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "Graphic Design",
    des: "Designing cards and fliers",
  },
];


const Aboutpage = () => {
  return (
    <>
    <Navbar/>
      <section className={styles.about}>
        <h2 className={styles.heading}>
          About <span>Me</span>
        </h2>

        <div className={styles.aboutImg}>
          <img src={aboutme} alt="" className={styles.me} />
          <span className={styles.circleSpin}></span>
        </div>

        <div class={styles.aboutContent}>
          <h3>Full Stack Web Developer</h3>
          <p>
            As a dedicated and innovative web developer, I am adept at creating
            captivating and user-centric websites. I demonstrate mastery in CSS
            frameworks like Tailwind, Bootstrap, and Material UI, ensuring
            seamless and responsive designs. Additionally, I possess outstanding
            graphic design skills and an in-depth understanding of UI/UX
            principles to deliver exceptional user experiences. Moreover, I am
            proficient in React for building dynamic and interactive front-end
            components, and I am skilled in using Node.js and MongoDB for
            scalable and efficient backend development. I leverage backend
            technologies effectively to create robust and secure web
            applications. Additionally, I have expertise in version control
            systems such as Git and collaborative platforms like GitHub and
            Jira. Moreover, I excel in soft skills such as effective
            communication, proficient time management, and consistently meeting
            project deadlines. I am proficient in deploying frontend
            applications to Vercel and backend applications to Render. I am a
            collaborative team player with a strong commitment to continuous
            learning and staying abreast of industry advancements."
          </p>
        </div>
      </section>
      <div className={styles.achievementRow}>
        <div className={styles.achievementColumn}>
          <h3 className={styles.heading}>
            <span>Achiev</span>ements
          </h3>
          <div className={styles.achievementBox}>
            <div className={styles.achievementContent}>
              <div className={styles.content}>
                <h3>Responsive Design</h3>
                <p>
                  I'm keen on ensuring that all projects have responsive designs
                  that are mobile friendly and optimized for all screen sizes
                  using techniques such as media query and css framworks like
                  tailwind, css and bootstrap
                </p>
              </div>
            </div>

            <div className={styles.achievementContent}>
              <div className={styles.content}>
                <h3>Collaboration and Teamwork</h3>
                <p>
                  All my successful projects that i collaborated on have all
                  been curated through project delegation, effective
                  communication and team work
                </p>
              </div>
            </div>

            <div className={styles.achievementContent}>
              <div className={styles.content}>
                <h3>Web Development</h3>
                <p>
                  I pride myself in working effectively to create websites that
                  are responsive, interactive and functional in order to promote
                  a smooth user/client experience
                </p>
              </div>
            </div>

            <div className={styles.achievementContent}>
              <div className={styles.content}>
                <h3>UI/UX Designing</h3>
                <p>
                  Creative designing has been my hallmark and unique skill. This
                  i am able to do with ease.
                </p>
              </div>
            </div>

            <div className={styles.achievementContent}>
              <div className={styles.content}>
                <h3>Hosting websites</h3>
                <p>
                  Using Vercel for hosting frontend applications and render for
                  hosting backend apllications.
                </p>
              </div>
            </div>

            <div className={styles.achievementContent}>
              <div className={styles.content}>
                <h3>Project Completion</h3>
                <p>
                  Skilled with effective time management, stress management
                  skills, organizational skills and effective communication
                  skills to meet project deadlines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="services" className="w-full py-20 ">
        <h3 className={styles.heading}>
          What I <span>Can Do</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full px-12 h-94 py-10 rounded-lg flex items-center bg-bgColor group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] duration-100 group"
            >
              <div className="h-72 overflow-y-hidden">
                <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-10 flex flex-col justify-between">
                    {service.icon ? (
                      <span className="text-5xl text-mainColor">
                        {service.icon}
                      </span>
                    ) : (
                      <>
                        <span className="w-full h-[2px] rounded-lg bg-mainColor inline-flex"></span>
                        <span className="w-full h-[2px] rounded-lg bg-mainColor inline-flex"></span>
                        <span className="w-full h-[2px] rounded-lg bg-mainColor inline-flex"></span>
                        <span className="w-full h-[2px] rounded-lg bg-mainColor inline-flex"></span>
                      </>
                    )}
                  </div>
                  <div className="flex flex-col gap-6">
                    <h2 className="text-xl md:text-4xl font-titleFont font-bold text-gray-300">
                      {service.title}
                    </h2>
                    <p className="text-xl">{service.des}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Aboutpage;
