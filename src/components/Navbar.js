import React from "react";
import { Link } from "react-router-dom";
import '../style/nav.css'
import resume from '../assets/Resume.pdf'

const Navbar = () =>{
    return (
        <div>
        <nav className="nav-links">
                <div className="nav-item"><Link to="/" >Home</Link></div>
            
                <div className="nav-item"><Link to="/aboutme" >About Me</Link></div>
                <div className="nav-item"><a href={resume} download="Alex Barbosa 05262022">Resume</a></div>
                <a className="nav-item" rel="noreferrer" target="_blank"  id="linkedin" href="https://www.linkedin.com/in/alexbarbosa1/" > </a>
                <a className="nav-item" id="github" rel="noreferrer" target="_blank" href="https://github.com/barboa91"> </a>
                <a className="nav-item" id="email" rel="noreferrer" target="_blank" href="mailto:alex.andrew.barbosa@gmail.com"> </a>
        
        </nav>
        </div>
    )
}
export default Navbar