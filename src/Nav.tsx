// import React from 'react'
// import { useState } from 'react'
import './Nav.css'
import githubIcon from './assets/github.png';
import instaIcon from './assets/instagram.png';
import linkdinIcom from './assets/linkdin.png';

function Nav() {
//   const [count, setCount] = useState(0)

  return (
    <>
        
      <div className="nav-container">
            <ul className= "nav-list">
                <li>    
                    <a href="https://github.com/sanjeetsamuel" target="_blank" rel="noopener noreferrer">
                        <img src = { githubIcon } alt="Git" className="nav-image" />
                    </a>
                </li>

                <li>
                    <a href="https://github.com/sanjeetsamuel">
                        <img src = { instaIcon } alt="Insta" className="nav-image" />
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/sanjeet-samuel-palukuri-6746111b6/" target="_blank" rel="noopener noreferrer">
                        <img src = { linkdinIcom } alt="Linkdin" className="nav-image" />
                    </a>
                </li>
            </ul>
        
      </div>

    </>
  )
}

export default Nav
