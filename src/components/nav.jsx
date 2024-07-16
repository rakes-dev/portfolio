import React from 'react';

const Nav = () => {
  return (
    <nav className="container-fluid top-0 left-0 w-full shadow-md block">
      <div className='nav'>
        <div className='left'>
           <h1><strong>My Profile</strong></h1>
        </div>
        <div className='right'>
          <ul>
            <li><a href="#dashboard">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#certifications">Certifications</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
