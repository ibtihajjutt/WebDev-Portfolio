import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import TechStack from '../sections/TechStack';
import Project from '../sections/Projects';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Project />
      <Experience />
      <Contact />
    </>
  );
};

export default HomePage;