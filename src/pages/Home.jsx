import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";


const Home = () => {
  return (
    <main className="bg-slate-900 text-white">

      <Hero />


      <section id="about">
        <About />
      </section>


      <section id="skills">
        <Skills />
      </section>


      <section id="projects">
        <Projects />
      </section>


      <section id="contact">
        <Contact />
      </section>


    </main>
  );
};


export default Home;