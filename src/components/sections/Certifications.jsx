import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications">
      <div className='bg-black rounded-md p-10 text-white'>
      <div className='text-area'>
        <h2 className='text-5xl'>CERTIFICATIONS</h2>
        <h3>Professional Certifications</h3>
      </div>
      <p>Here are some of the certifications I have obtained:</p>
      <div>
        <h3 className='font-bold text-red-400'>Google IT Support Professional Certificate</h3>
          <p>
          This certification provided by
          Coursera has equipped me with the necessary skills and
          knowledge to provide technical support to individuals and
          organizations.</p>
      </div>
      <div>
        <h3 className='font-bold text-red-400'>Programming for Everybody (Getting Started with Python) by
        Coursera</h3>
        <p>"Completed 'Programming for Everybody (Getting Started with Python)' course, 
          acquiring a solid foundation in Python programming. 
          Proficient in fundamental programming concepts. 
          data structures, file handling, web scraping, 
          and database basics</p>
      </div>
      </div>
    </section>
  );
}

export default Certifications;
