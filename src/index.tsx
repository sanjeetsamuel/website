// import React, { useEffect } from 'react';
import './index.css';
import ReactLoading from 'react-loading';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

import './Nav.css'
import githubIcon from './assets/images/github.png';
import instaIcon from './assets/images/instagram.png';
import linkdinIcon from './assets/images/linkdin.png';

const Index = () => {

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        gsap.to(".loading-container", {
            opacity: 1,
            duration: 1,
            repeat: 0,
            yoyo: true,
            ease: "power1.inOut",
            delay:2,
            onComplete: () => setLoading(false),
        });

        gsap.to(".loading-container h1", {
            y: 20,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
        });

        gsap.fromTo(".index-container", { 
            y: '100vh',
        }, 
        {
            y: 0,
            delay: 3,
            borderRadius: "0%",
            duration: 3,
            ease: "power2.out",
        }
        );

        gsap.fromTo(".nav-container", { 
            y: '100vh'
        }, 
        {
            y: 0,
            delay: 3,
            borderRadius: "0%",
            duration: 3,
            ease: "power2.out",
            position: "fixed",
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
   
            <div className="index-container">
                <link href="https://www.fontspace.com/american-captain-font-f10784" rel="stylesheet" />
                <div className="head-container">
                <h1>Sanjeet</h1>
                    <h1>Samuel</h1>
                    <h1>Palukuri</h1>
                </div>
            </div>

            <div className="nav-container">
                <ul className= "nav-list">
                    <li className="github">    
                        <a href="https://github.com/sanjeetsamuel" target="_blank" rel="noopener noreferrer">
                            <img src = { githubIcon } alt="Git" className="nav-image" width="35" height="35"/>
                        </a>
                    </li>
    
                    <li className="insta">
                        <a href="https://github.com/sanjeetsamuel" target="_blank" rel="noopener noreferrer">
                            <img src = { instaIcon } alt="Insta" className="nav-image" width="35" height="35"/>
                        </a>
                    </li>
    
                    <li className="linkdin">
                        <a href="https://www.linkedin.com/in/sanjeet-samuel-palukuri-6746111b6/" target="_blank" rel="noopener noreferrer">
                            <img src = { linkdinIcon } alt="Linkdin" className="nav-image" width="35" height="35"/>
                        </a>
                    </li>
                </ul>
            </div>

        </>
    );
}

export default Index;
