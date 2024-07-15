import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className='bg-black rounded-md p-10 text-white'>
      <div className='text-area'>
        <h2 className='text-5xl'>PROJECTS</h2>
        <h3>Recent Work</h3>
      </div>
      <p>Here are some of the projects I have worked on:</p>
      <div class="project">
        <h2 class="project-title">Travel Booking System (Web Application)</h2>
        {/* <p>College's Minor Project</p> */}
        <ul class="project-description">
          <li>Led my team in designing, and implementing an interactive Travel Booking System.</li>
          <li>Integrated a diverse range of technologies including Java EE, <highlight>HTML/CSS/JavaScript</highlight>, <highlight>JSP</highlight> (JavaServer Pages), and <highlight>Oracle 10g</highlight> Database to create a robust web application.</li>
          <li>Successfully managed the entire lifecycle of the project from initial planning to execution.</li>
          <li className='list-none'><span className='text-red-600 font-bold'>Link:</span> <a className='text-red-300' href="https://github.com/rakes-dev/Travel-Booking-System">github.com/rakes-dev/Travel-Booking-System</a></li>
        </ul>
      </div>

      <div class="project">
        <h2 class="project-title">Car Rental System (Web Application)</h2>
        {/* <p>College's Major Project</p> */}
        <ul class="project-description">
          <li>As part of my college major project, I collaborated with a team to design and develop a comprehensive Car Rental System web application.</li>
          <li>The project leveraged a robust tech stack, with <highlight>React</highlight> and <highlight>Node.js</highlight> powering the frontend, and <highlight>SpringBoot</highlight> and <highlight>MySQL</highlight> forming the backbone of the backend.</li>
          <li className='list-none'><span className='text-red-600 font-bold'>Link:</span> <a className='text-red-300' href="https://github.com/rakes-dev/Car-Rental">github.com/rakes-dev/Car-Rental</a></li>

        </ul>
      </div>
      </div>
    </section>
  );
}

export default Projects;
