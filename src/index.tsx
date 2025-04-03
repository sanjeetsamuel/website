// import React, { useEffect } from 'react';
import './index.css';
import ReactLoading from 'react-loading';
import { useEffect, useState } from 'react';
// import { Box } from '@mui/material';
import { gsap } from 'gsap';

import githubIcon from './assets/images/github.png';
import instaIcon from './assets/images/instagram.png';
import linkdinIcon from './assets/images/linkdin.png';
import urban from './assets/images/Urban.png';
import course from './assets/images/Course.png';
import wordle from './assets/images/Wordle.png';
import llm from './assets/images/LLM.jpg';

const Index = () => {

    const [loading, setLoading] = useState(true);
    const [about, onAbout] = useState(true);
    const [projects, onProjects] = useState(true);


    useEffect(() => {
        gsap.to(".loading-container", {
            opacity: 1,
            duration: 1,
            repeat: 0,
            yoyo: true,
            ease: "power1.inOut",
            delay: 2
        });

        gsap.to(".loading-container h1", {
            y: 20,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
        });

        gsap.fromTo(".title-container", {
            y: '100vh',
        },
            {
                y: 0,
                delay: 3,
                borderRadius: "0%",
                duration: 3,
                ease: "power2.out",
                onComplete: () => setLoading(false)
            }
        );

        gsap.fromTo(".link-container", {
            y: '100vh'
        },
            {
                y: 0,
                delay: 3,
                duration: 3,
                ease: "power2.out",
                position: "fixed",
                onComplete: () => setLoading(false)
            }
        );

        gsap.fromTo(".nav-container", {
            y: '100vh'
        },
            {
                y: 0,
                delay: 3,
                duration: 3,
                ease: "power2.out",
                position: "fixed",
                onComplete: () => setLoading(false)
            }
        );
        


    }, []);




    return (
        <>

            {loading && (
                <div className="loading-container">
                    <ReactLoading className='load' type="bubbles" color="#EF233C"
                        height={100} width={50} />
                </div>

            )}

            <link href="https://www.fontspace.com/american-captain-font-f10784" rel="stylesheet" />
            <div className="title-container">
                <div className="head-container">
                    <h1>Sanjeet</h1>
                    <h1>Samuel</h1>
                    <h1>Palukuri</h1>
                </div>
            </div>

            <div className="links-container">
                <ul className="nav-list">
                    <li className="github">
                        <a href="https://github.com/sanjeetsamuel" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="Git" className="nav-image" width="35" height="35" />
                        </a>
                    </li>

                    <li className="insta">
                        <a href="https://github.com/sanjeetsamuel" target="_blank" rel="noopener noreferrer">
                            <img src={instaIcon} alt="Insta" className="nav-image" width="35" height="35" />
                        </a>
                    </li>

                    <li className="linkdin">
                        <a href="https://www.linkedin.com/in/sanjeet-samuel-palukuri-6746111b6/" target="_blank" rel="noopener noreferrer">
                            <img src={linkdinIcon} alt="Linkdin" className="nav-image" width="35" height="35" />
                        </a>
                    </li>
                </ul>
            </div>

            <div className='nav-container'>
                <ul>
                    <li><a className='nav-link' href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: window.innerHeight * 1, behavior: 'smooth' }), onAbout(true), onProjects(false) }}>About Me</a></li>
                    <li><a className='nav-link' href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' }), onAbout(false), onProjects(true); }}>Projects</a></li>
                </ul>

            </div>


            <div id='about' className='about-container'>

                <h1>About Me</h1>

                <div>
                    <p>Name: Sanjeet</p>
                    <p>Age: 22</p>
                    <p>Born: Hyderabad, India</p>
                    <p>Education: Victoria University of Wellington</p>
                    <p>Degree: Bachelor of Engineering (Honours)</p>
                    <p>Major: Software Engineering</p>
                    <p>Hobbies: Coding, Reading, Video Games, Music</p>
                    <p>
                        Personal Note: I am a Software Engineer who is passionate about technology and its applications.
                        I am always looking for new opportunities to learn and grow.
                        I am a team player and I am always looking for ways to improve myself and the people around me. I am a quick learner and I am always looking for ways to improve my skills.
                    </p>
                </div>

            </div>


            <div className='projects-container'>

                <h1>Projects</h1>

                <div className='grid-ro-1'>
                    <div className='grid-content'> 
                        <img className='p-img' src={urban} width='350' height='150'></img>
                        <p>
                            Created a server side rendering website using Express.js and Node.js as part of a group assignmnet. I was responsible for creation of database
                            which was made on firebase as well as the creation of the backend server.
                        </p>
                    </div>

                    <div className='grid-content'>
                        <img className='p-img' src={course} width='350' height='150'></img>
                        <p>
                            This is a project that I worked on during my time at University.
                            It is a web application that allows users to create, edit and delete course.
                            The application also allows users plan their courses and see the requirements.
                        </p>
                    </div>
                </div>

                <div className='grid-ro-2'>
                    <div className='grid-content'> 
                        <img className='p-img' src={wordle} width='350' height='150'></img>
                        <p>
                            Created a clone of worldle using react and typescript. The application allows users to guess the word based on the hints provided.
                            The game provides feedback for each guess, indicating which letters are correct.
                        </p>
                    </div>

                    <div className='grid-content'>
                        <img className='p-img' src={llm} width='350' height='150'></img>
                        <p>
                            Final year project was using AI to detect fake news. This was done using multiple models and looking at various 
                            text embeddings. The project was done using python and the models were trained on news articles and tweets.
                        </p>
                    </div>
                </div>


            </div>

            <footer className='footer'><p>SDFHJKLSDFHJKLSFHJKLSFHJKL</p></footer>


        </>
    );
}

export default Index;
