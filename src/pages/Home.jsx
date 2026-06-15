import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import CodingProfiles from '../components/CodingProfiles';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="relative z-10 selection:bg-accent/30 selection:text-current">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
