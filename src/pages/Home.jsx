import React from "react";
import { Element } from "react-scroll";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <>
      <Element name="hero">
        <Hero />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};

export default Home;