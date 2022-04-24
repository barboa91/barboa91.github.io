import React from "react";
import linkedin from "./images/linkedin-icon.svg"
import github from "./images/Octicons-mark-github.svg"
import { Link } from "react-router-dom";
const Socials = () =>{
    return(
        <div className="Socials">


            <div className="Social">
                <Link to="https://github.com/barboa91"><img className="LogoSocial"  alt="GitHub"/></Link>
            </div>
            <div className ="NameLogo">Alex<br/> BarbosA</div>
            
            <div className="Social">
                <Link to="https://www.linkedin.com/in/alexbarbosa1/"><img className="LogoSocial" src={linkedin} alt="Linked In"/></Link>
            </div>
        </div>
    )
}

export default Socials

