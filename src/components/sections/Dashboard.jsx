import React from "react";
import img from '../../assests/img/my-avatar.png'
import call from '../../assests/img/call.png'
import mail from '../../assests/img/email.png'
import loc from '../../assests/img/location.png'
import linkd from '../../assests/img/linkedin.png'
import * as images from '../../assests/images'
import sb from '../../assests/img/spring-initializr.svg'
import go from '../../assests/img/go-logo-white.svg'

// import '../../css/dashboard.css'

const Dashboard = () => {
    return (
        <section id="dashboard">
            <div className="container-home">
                <div className='img-area sm:w-auto'>
                <figure>
                    <img src={img} alt="Developer" />
                    <figcaption>Rakesh Sardar</figcaption>
                </figure>
                <dl>
                    <dt><img src={call} alt="failed to load" /></dt>
                    <dd>+91 79983 XXXX</dd>
                    <dt><img src={loc} alt="failed to load" /></dt>
                    <dd>Kolkata, West Bengal</dd>
                    <dt><img src={mail} alt="failed to load" /></dt>
                    <dd>rakesh374@outlook.com</dd>
                    <dt><img src={linkd} alt="failed to load" /></dt>
                    <dd><a href='https://linkedin.com/in/rakesh-sardar-763a40217'>rakesh-sardar-763a40217</a></dd>
                </dl>
                </div>
                <div>
                    <h1 className="text-5xl mt-5 text-red-400">Hello! I'm Rakesh</h1>

                    <div className="grid grid-cols-2 p-10 gap-8">
                    <div className="grid-item">
                            <h2 className="text-4xl m-2">INTRODUCTION</h2>
                            <div className="grid-text">
                                <p className="text-justify text-sm m-2">I’m seeking opportunities to gain real-world experience and contribute effectively to diverse software projects.
                                With a strong foundation in programming, software development, and problem-solving, I am proficient in Java,
                                Python etc. I am confident in my technical abilities and adaptability, which will make me an asset to any
                                organization. I eagerly await the opportunity to demonstrate my qualifications and contribute to your team.</p>
                                <div className="text-center btn m-0">
                                <a className="px-4 py-2 rounded-md" href="#about" type="button">More</a>
                            </div>
                            </div>
                    </div>
                        <div className="grid-item">
                            <h2 className="text-4xl m-2">PROJECTS</h2>
                            <div className="grid-text">
                                <div>
                                    <h4 className="text-red-400 text-xl font-bold">Travel Booking System</h4>
                                            <p className="text-sm mb-1"> Build with Java EE, 
                                                HTML/CSS/JS, JSP (JavaServer Pages), 
                                                and Oracle 10gDatabase to create a robust web application.</p>
                                    <h4 className="text-red-400 text-xl font-bold">Car Rental System</h4>
                                            <p className="text-sm m-0">The project embdded with React and Node.js
                                                powering the frontend, and SpringBoot and MySQL forming the
                                                backbone of the backend.</p>
                                        <div className="text-center btn mt-2">
                                            <a className="px-4 py-2 rounded-md" href="#projects" type="button">More</a>
                                        </div>
                                </div>   
                            </div>
                        </div>
                        <div className="grid-item">
                            <h2 className="text-4xl m-2">SKILLS</h2>
                            <div className="grid-text">
                                <div className="flex">
                                <div className="flex-1 border-r-2 border-red-400">
                                    <h4 className="text-red-400">Programming Lang.</h4>
                                    {/* <div></div> */}
                                        <ul>
                                            <li className="flex item-center"><img src={images.pyLogo} alt="" />Python</li>
                                            <li className="flex"><img src={images.javaLogo} alt="" />Java</li>
                                            <li className="flex"><img src={images.cLogo} alt="" />C Programing</li>
                                            <li className="flex"><img src={go} alt="" />Go Prog</li>
                                        </ul>
                                </div>
                                <div className="flex-1 ml-2">
                                    <h4 className="text-red-400">Web Development</h4>
                                        <ul>
                                            <li className="flex"><img src={images.reactLogo} alt="" />React</li>
                                            <li className="flex"><img src={sb} alt="" />Spring Boot</li>
                                            <li className="flex"><img src={images.tsLogo} alt="" />TypeScript</li>
                                            <li className="flex"><img src={images.jsLogo} alt="" />JavaScript</li>
                                        </ul>
                                </div> 
                                </div> 
                                <div className="text-center btn mt-4 mb-3 ">
                                    <a className="px-4 py-2 rounded-md" href="#skills" type="button">More</a>
                                </div>     
                            </div>
                        </div>
                        <div className="grid-item">
                                <h2 className="text-4xl m-2">EDUCATION</h2>
                            <div className="grid-text">
                                <h4 className="text-red-400 text-xl font-bold">Collins Institute</h4>
                                <li className="text-xm mb-1">Class 12th (WBCHSE)</li>
                                <li className="mb-4">Percentage - 63%</li>
                                <h4 className="text-red-400 text-xl font-bold">Techno India Institute of India</h4>
                                <li>Bachelor Computer application</li>
                                <li>2021 - (Graduation expected July 2024)</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Dashboard;