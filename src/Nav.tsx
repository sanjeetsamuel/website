// import React from 'react'
// import { useState } from 'react'
import './Nav.css'
import githubIcon from './assets/images/github.png';
import instaIcon from './assets/images/instagram.png';
import linkdinIcon from './assets/images/linkdin.png';

function Nav() {
//   const [count, setCount] = useState(0)

  return (
        
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

  )
}

export default Nav
