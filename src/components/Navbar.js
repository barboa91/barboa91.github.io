import React from "react";
import linkedIn from '../assets/logos/linkedin-icon.svg'
import { Link } from "react-router-dom";
import '../style/nav.css'

const Navbar = () =>{
    return (
        <div>
        <nav className="nav-links">
            
                <div className="nav-item"><Link to="/socials" >About Me</Link></div>
                <div className="nav-item"><Link to="/resume">Resume</Link></div>
                <a className="nav-item" rel="noreferrer" target="_blank"  id="linkedin" href="https://www.linkedin.com/in/alexbarbosa1/" > </a>
                <a className="nav-item" id="github" rel="noreferrer" target="_blank" href="https://github.com/barboa91"> </a>
                <a className="nav-item" id="email" rel="noreferrer" target="_blank" href="mailto:alex.andrew.barbosa@gmail.com"> </a>
        
        </nav>
        </div>
    )
}
export default Navbar