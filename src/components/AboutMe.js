import React from "react";
import '../style/aboutme.css'
import pic from '../assets/headshot.jpeg'
import Navbar from "./Navbar";

const AboutMe = () =>{

    return(
    <div>
        <Navbar/>
    <div className="aboutme">
        
        <div>
            <img className="profPic"alt="pro" src={pic}></img>
            </div>
            <div className="profDesc"> 
                <div className="aboutName">Alex Barbosa</div>
                <div className="bio">I am a software developer based out of New York City, who is dedicated and hardworking; my main tools are React, JavaScript, and PostgreSQL. Each day, I strive to provide the best and optimal solution for every problem I encounter. With a background in IT, one of my strengths as a developer is my ability to approach solutions with patience, precision, and methodical debugging. </div>

                <div className="email">email : alex.andrew.barbosa@gmail.com </div>
            </div>

            </div>
    </div>)

}

export default AboutMe