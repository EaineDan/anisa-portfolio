import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import About from '../../components/about/About';
import Education from '../../components/education/Education';
import Skills from '../../components/skills/Skills';
import Projects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default Homepage;
