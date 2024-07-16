import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className='grid grid-cols-5 gap-1'>
        <a href="#about">About</a>
        <a href="#skills">Skills</a> 
        <a href="#projects">Projects</a>
        <a href="#education">Education</a> 
        <a href="#certifications">Certifications</a>
      </div>
    </footer>
  );
}

export default Footer;
