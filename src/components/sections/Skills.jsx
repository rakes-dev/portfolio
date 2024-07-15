import React from 'react';
import * as logo from '../../assests/images'
import sb from '../../assests/img/spring-initializr.svg'
import go from '../../assests/img/go-logo-white.svg'

const Skills = () => {
  return (
    <section id="skills">
      <div className="bg-black rounded-md p-1">
      <div className='text-area'>
        <h2 className='text-5xl p-8'>SKILLS</h2>
        {/* <h4 className="project-title text-red-400 text-center">Technical Skills</h4> */}
      </div>
      <div className='grid grid-cols-4 m-20 gap-10 items-center w-fit' >
        <div className='grid-item'><img className='size-28 m-5' src={logo.javaLogo} alt="" /></div>
        <div className='grid-item'><img className='size-28 m-5' src={logo.pyLogo} alt="" /></div>
        <div className='grid-item'><img className='size-28 m-5' src={logo.cLogo} alt="" /></div>
        <div className='grid-item'><img className='size-28 m-5' src={go} alt="" /></div>
        <div className='grid-item'><img className='size-28 m-5' src={logo.reactLogo} alt="" /></div>
        <div className='grid-item'><img className='size-28 m-5' src={sb} alt="" /></div>
        <div className='grid-item'><img className='size-28 m-5' src={logo.tsLogo} alt="" /></div>
        <div className='grid-item'><img className='size-28 m-5' src={logo.jsLogo} alt="" /></div>
        {/* <div className='grid-item'><img src={} alt="" /></div>
        <div className='grid-item'><img src={} alt="" /></div> */}
        {/* <div className='grid-item'></div>
        <div className='grid-item'></div>
        <div className='grid-item'></div>
        <div className='grid-item'></div>
        <div className='grid-item'></div>
        <div className='grid-item'></div>
        <div className='grid-item'></div> */}
      </div>
      {/* <figure>
        <img src="https://source.unsplash.com/random/800x600/?coding" alt="Coding" />
        <figcaption><a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Image Source: Unsplash</a></figcaption>
      </figure> */}
      </div>
    </section>
  );
}

export default Skills;
