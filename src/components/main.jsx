import React from 'react';
import Dashboard from './sections/Dashboard'
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

const Main = () => {
  return (
    <main className="container">
      <div className="grid w-fit gap-10">
        <Dashboard/>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
      </div>
      <Contact />
    </main>
  );
}

export default Main;
