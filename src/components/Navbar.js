import React from "react";
import { Link } from "react-router-dom";
import '../style/nav.css'

const Navbar = () =>{
    return (
        <div>
        <nav className="nav-links">
            
                <div className="nav-item"><Link to="/socials" >About Me</Link></div>
                <div className="nav-item"><Link to="/projects">Projects</Link></div>
                <div className="nav-item"><Link to="/skills">Skills</Link></div>
                <div className="nav-item"><Link to="/resume">Resume</Link></div>
                <div className="nav-item"><a href="mailto:alex.andrew.barbosa@gmail.com">e-Mail</a></div>
        
        </nav>
        </div>
    )
}
export default Navbar