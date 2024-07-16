import React from 'react';
import * as logo from '../../assests/images'
import sb from '../../assests/img/spring-initializr.svg'
import go from '../../assests/img/go-logo-white.svg'

const Skills = () => {
  return (
    <section id="skills">
      <div className="bg-black rounded-md p-10">
      <div className='text-area'>
        <h2 className='text-5xl'>SKILLS</h2>
        <h3 className="">Technical Skills</h3>
      </div>
      <div className='grid grid-cols-4 m-20 gap-10 items-center ' >
        <div className='grid border-4 rounded-md border-red-400 hover:border-white text-white text-center justify-center'><img className='size-28 m-5' src={logo.javaLogo} alt="" />JAVA</div>
        <div className='grid border-4 rounded-md border-red-400 hover:border-white text-white text-center justify-center'><img className='size-28 m-5' src={logo.pyLogo} alt="" />PYTHON</div>
        <div className='grid border-4 rounded-md border-red-400 hover:border-white text-white text-center justify-center'><img className='size-28 m-5' src={logo.cLogo} alt="" />C PROG.</div>
        <div className='grid border-4 rounded-md border-red-400 hover:border-white text-white text-center justify-center'><img className='size-28 m-5' src={go} alt="" />GO PROG.</div>
        <div className='grid border-4 rounded-md border-red-400 hover:border-white text-white text-center justify-center'><img className='size-28 m-5' src={logo.reactLogo} alt="REACT" />REACT</div>
        <div className='grid border-4 rounded-md border-red-400 hover:border-white text-white text-center justify-center'><img className='size-28 m-5' src={sb} alt="" />SPRING BOOT</div>
        <div className='grid border-4 rounded-md border-red-400 hover:border-white text-white text-center justify-center'><img className='size-28 m-5' src={logo.tsLogo} alt="" />TYPE SCRIPT</div>
        <div className='grid border-4 rounded-md border-red-400 hover:border-white text-white text-center justify-center'><img className='size-28 m-5' src={logo.jsLogo} alt="" />JAVA SCRIPT</div>
        {/*
        <div className='grid border-4 rounded-md border-red-400 text-white text-center justify-center'></div>
        <div className='grid border-4 rounded-md border-red-400 text-white text-center justify-center'></div>
        <div className='grid border-4 rounded-md border-red-400 text-white text-center justify-center'></div>
        <div className='grid border-4 rounded-md border-red-400 text-white text-center justify-center'></div>
        <div className='grid border-4 rounded-md border-red-400 text-white text-center justify-center'></div>
        <div className='grid border-4 rounded-md border-red-400 text-white text-center justify-center'></div> */}
      </div>

      </div>
    </section>
  );
}

export default Skills;
