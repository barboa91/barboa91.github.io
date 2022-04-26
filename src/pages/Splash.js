import React  from "react";
import Navbar from "../components/Navbar";
// import Skills from "../components/Skills";
// import { Link } from "react-router-dom";
import '../style/splash.css'

const Splash = () =>{
    return (

        <div className="splash-container">
            <Navbar/>
            <div className="splash-wrap">

                <div className="splash-left">
                    <div className='splash-welcome'>
                        Hi, I'm
                        Alex <br/>
                        a Full Stack Software engineer.


                    </div>      
                 </div>
                <div className="splash-right">
                     RIGHT
                    <div className="project-squares">
                        <div id="project1">A</div>
                        <div id="project2">B</div>
                        <div id="project3">C</div>
                        <div id="project4">D</div>
                    </div>
                 </div>

            </div>
            

        </div>
    )
}
export default Splash