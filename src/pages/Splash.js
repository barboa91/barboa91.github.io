import React,{ useState }  from "react";
import Navbar from "../components/Navbar";
// import Skills from "../components/Skills";
// import { Link } from "react-router-dom";
import '../style/splash.css'

const Splash = () =>{
// this is the images
    const styles = {
        "backgroundColor": "",
        "width": "100px",
        "height": "100px",
        "background-size": "contain",
        "background-repeat": "no-repeat",
        "background-position": "center",
        "transform": "scale(1.3)",
        // "display": "inline-block",
        "border":"solid #ffffff 6px",
        "border-radius":"25%",

        "pointer-events": "none",
    };
    const styles1 = {
        "backgroundColor": "",

        "width": "50px",
        "height": "100%",
        "background-size": "contain",
        "background-repeat": "no-repeat",
        "background-position": "center",
        "border":"",
        "pointer-events": "none",
        "border-radius":"",

    };
    // this is the flex box
    const barbig={
        "position": "relative",
        "bottom": "0px",
        "display": "flex",
        "flex-wrap": "wrap",
        "width": "100%",
        "height": "150px",
        "justify-content": "space-around",
        "align-items":"center",
        // "transform": "scale(1.3)",
        "pointer-events": "none",
    }
    const barsmall={
        "position": "relative",
        "bottom": "0px",
        "display": "flex",
        "flex-wrap": "wrap",
        "width": "100%",
        "height": "50px",
        "justify-content": "space-around",
        "align-items":"center",
        "pointer-events": "none",
    }
    const highlight1=()=>{
        var ski = document.getElementsByClassName("skills-bar");
        Object.assign(ski[0].style, barbig);
        var box1 = document.getElementsByClassName("skill1");
        Object.assign(box1[0].style, styles);
        var box2 = document.getElementsByClassName("skill2");
        Object.assign(box2[0].style, styles);
        var box3 = document.getElementsByClassName("skill3");
        Object.assign(box3[0].style, styles);
        var box4 = document.getElementsByClassName("skill12");
        Object.assign(box4[0].style, styles);

    }
    const unHighlight1=()=>{
        var ski = document.getElementsByClassName("skills-bar");
        Object.assign(ski[0].style, barsmall);
        var box1 = document.getElementsByClassName("skill1");
        Object.assign(box1[0].style, styles1);
        var box2 = document.getElementsByClassName("skill2");
        Object.assign(box2[0].style, styles1);
        var box3 = document.getElementsByClassName("skill3");
        Object.assign(box3[0].style, styles1);
        var box4 = document.getElementsByClassName("skill12");
        Object.assign(box4[0].style, styles1);

    }
    const highlight2=()=>{
        var ski = document.getElementsByClassName("skills-bar");
        Object.assign(ski[0].style, barbig);
        var box1 = document.getElementsByClassName("skill1");
        Object.assign(box1[0].style, styles);
        var box2 = document.getElementsByClassName("skill2");
        Object.assign(box2[0].style, styles);
        var box3 = document.getElementsByClassName("skill3");
        Object.assign(box3[0].style, styles);
        var box4 = document.getElementsByClassName("skill4");
        Object.assign(box4[0].style, styles);
        var box5 = document.getElementsByClassName("skill5");
        Object.assign(box5[0].style, styles);
        var box6 = document.getElementsByClassName("skill8");
        Object.assign(box6[0].style, styles);
        var box7 = document.getElementsByClassName("skill12");
        Object.assign(box7[0].style, styles);

    }
    const unHighlight2=()=>{
        var ski = document.getElementsByClassName("skills-bar");
        Object.assign(ski[0].style, barsmall);
        var box1 = document.getElementsByClassName("skill1");
        Object.assign(box1[0].style, styles1);
        var box2 = document.getElementsByClassName("skill2");
        Object.assign(box2[0].style, styles1);
        var box3 = document.getElementsByClassName("skill3");
        Object.assign(box3[0].style, styles1);
        var box4 = document.getElementsByClassName("skill4");
        Object.assign(box4[0].style, styles1);
        var box5 = document.getElementsByClassName("skill5");
        Object.assign(box5[0].style, styles1);
        var box6 = document.getElementsByClassName("skill8");
        Object.assign(box6[0].style, styles1);
        var box7 = document.getElementsByClassName("skill12");
        Object.assign(box7[0].style, styles1);
    }
    const highlight3=()=>{
        var ski = document.getElementsByClassName("skills-bar");
        Object.assign(ski[0].style, barbig);
        var box1 = document.getElementsByClassName("skill1");
        Object.assign(box1[0].style, styles);
        var box2 = document.getElementsByClassName("skill2");
        Object.assign(box2[0].style, styles);
        var box3 = document.getElementsByClassName("skill3");
        Object.assign(box3[0].style, styles);
        var box4 = document.getElementsByClassName("skill4");
        Object.assign(box4[0].style, styles);
        var box5 = document.getElementsByClassName("skill5");
        Object.assign(box5[0].style, styles);
        var box6 = document.getElementsByClassName("skill9");
        Object.assign(box6[0].style, styles);
        var box7 = document.getElementsByClassName("skill12");
        Object.assign(box7[0].style, styles);

    }
    const unHighlight3=()=>{
        var ski = document.getElementsByClassName("skills-bar");
        Object.assign(ski[0].style, barsmall);
        var box1 = document.getElementsByClassName("skill1");
        Object.assign(box1[0].style, styles1);
        var box2 = document.getElementsByClassName("skill2");
        Object.assign(box2[0].style, styles1);
        var box3 = document.getElementsByClassName("skill3");
        Object.assign(box3[0].style, styles1);
        var box4 = document.getElementsByClassName("skill4");
        Object.assign(box4[0].style, styles1);
        var box5 = document.getElementsByClassName("skill5");
        Object.assign(box5[0].style, styles1);
        var box6 = document.getElementsByClassName("skill9");
        Object.assign(box6[0].style, styles1);
        var box7 = document.getElementsByClassName("skill12");
        Object.assign(box7[0].style, styles1);
    }
    const [aboutToggle,setAboutToggle] = useState([0,0,0,0])
    
    const proj1 = {
        title : "Polygon Destroyer",
        decription: "This is my first project and one that I am most proud of. It is a video game in which the objective is to shoot lazers out of Jeremy's eyes and destroy yello rectangles. The only technology I used to create this is JavaScript HTML and CSS.",
        tech:["JavaScript","HTML","CSS"],
        site: "https://bashful-respect.surge.sh/",
        git:"https://github.com/barboa91/Polygon-Destroyer"
    }
    const proj2 = {
        title:"Archimagirus",
        decription:"No-nonsense Cookbook website, complete with pictures and comments and user accounts.",
        tech:["JavaScript","React","MongoDB","Mongoose","Express","Node.js","MERN","CRUD","HTML","CSS"],
        site:"https://tranquil-ocean-88816.herokuapp.com/",
        git:""
    }
    const proj3 = {
        title:"TravelBag",
        decription:"TravelBag is a social media site that is exclusively for presenting goregeous vistas and beautiful landscapes. Create an account and start posting some of your pictures!",
        tech:["JavaScript","React","PostgreSQL","Sequelize","Express","Node.js","PERN","CRUD","HTML","CSS"],
        site:"https://travel222sei.herokuapp.com/",
        git:""
    }
    const proj4 = {
        title:"Draw!",
        decription:"This is a drawing app that is built with canvas. It features JWT authentication for log in and post features. This project was particularly challenging with getting the canvas set up correctly. Users are able to download thier creations as well as upload them to share with other users of the website. The focus of this project was JavaScript Canvas and React. The technologies used are React, Javascript Canvas, PostGresql, Express, Sequelize, Node.js",
        tech:["JavaScript","Canvas","React","PostgreSQL","Sequelize","Express","Node.js","PERN","CRUD","HTML","CSS"],
        site:"https://travel222sei.herokuapp.com/",
        git:""
    }
    

    return (
      <div className="splash-container">
        <Navbar />
        <div className="splash-wrap">
          <div className="splash-left">
            <div className="splash-welcome">
              Hi, I'm Alex <br />a Full Stack Software engineer.
            </div>
          </div>
          <div className="splash-right">
            <div className="project-squares">
            <div id="project1" onMouseOver={() => {highlight1();}} onMouseOut={() => unHighlight1()}>
            {aboutToggle[0] === 0 ? 
             <div id="proj1Image">
                  <div className="projTitle">Polygon Destroyer</div>
                  <div className="projBottom">
                      <div className="projLinks">
                        <a target="_blank" rel="noreferrer" href="https://bashful-respect.surge.sh/" className="liveLink">Live</a><div style={{display:"inline"}} onClick={()=>setAboutToggle([1,aboutToggle[1],aboutToggle[2],aboutToggle[3]])}>About</div><a  target="_blank" rel="noreferrer" href={proj1.git} className="gitLink">Git</a>
                      </div>
                  </div>
                </div>: 
                <div id="projDesc">
                <div className="projTitle">Polygon Destroyer</div>
                <div> {proj1.decription}</div>
                <div className="projBottom">
                    <div className="projLinks">
                      <a target="_blank" rel="noreferrer" href="https://bashful-respect.surge.sh/" className="liveLink">Live</a><div style={{display:"inline"}} onClick={()=>setAboutToggle([0,aboutToggle[1],aboutToggle[2],aboutToggle[3]])}>About</div><a  target="_blank" rel="noreferrer" href="https://github.com/barboa91/Polygon-Destroyer" className="gitLink">Git</a>
                    </div>
                </div>
              </div>
              }
              </div>
              <div
                id="project2"
                onMouseOver={() => {
                  highlight2();
                }}
                onMouseOut={() => unHighlight2()}
              >
                  {aboutToggle[1] === 0 ? 
             <div id="proj2Image">
                  <div className="projTitle">{proj2.title}</div>
                  <div className="projBottom">
                      <div className="projLinks">
                        <a target="_blank" rel="noreferrer" href={proj2.site} className="liveLink">Live</a><div style={{display:"inline"}} onClick={()=>setAboutToggle([aboutToggle[0],1,aboutToggle[2],aboutToggle[3]])}>About</div><a  target="_blank" rel="noreferrer" href={proj2.git} className="gitLink">Git</a>
                      </div>
                  </div>
                </div>:  
                <div id="projDesc">
                <div className="projTitle">{proj2.title}</div>
                <div> {proj2.decription}</div>
                <div className="projBottom">
                    <div className="projLinks">
                      <a target="_blank" rel="noreferrer" href={proj2.site} className="liveLink">Live</a><div style={{display:"inline"}} onClick={()=>setAboutToggle([aboutToggle[0],0,aboutToggle[2],aboutToggle[3]])}>About</div><a  target="_blank" rel="noreferrer" href={proj2.git} className="gitLink">Git</a>
                    </div>
                </div>
              </div>
              }
              </div>
              <div
                id="project3"
                onMouseOver={() => {
                  highlight3();
                }}
                onMouseOut={() => unHighlight3()}
              >
                                  {aboutToggle[2] === 0 ? 
             <div id="proj3Image">
                  <div className="projTitle">{proj3.title}</div>
                  <div className="projBottom">
                      <div className="projLinks">
                        <a target="_blank" rel="noreferrer" href={proj3.site} className="liveLink">Live</a><div style={{display:"inline"}} onClick={()=>setAboutToggle([aboutToggle[0],aboutToggle[1],1,aboutToggle[3]])}>About</div><a  target="_blank" rel="noreferrer" href={proj3.git} className="gitLink">Git</a>
                      </div>
                  </div>
                </div>:  
                <div id="projDesc">
                <div className="projTitle">{proj3.title}</div>
                <div> {proj3.decription}</div>
                <div className="projBottom">
                    <div className="projLinks">
                      <a target="_blank" rel="noreferrer" href={proj3.site} className="liveLink">Live</a><div style={{display:"inline"}} onClick={()=>setAboutToggle([aboutToggle[0],aboutToggle[1],0,aboutToggle[3]])}>About</div><a  target="_blank" rel="noreferrer" href={proj3.git} className="gitLink">Git</a>
                    </div>
                </div>
              </div>
              }
              </div>
              <div id="project4">                                  {aboutToggle[3] === 0 ? 
             <div id="proj4Image">
                  <div className="projTitle">{proj4.title}</div>
                  <div className="projBottom">
                      <div className="projLinks">
                        <a target="_blank" rel="noreferrer" href={proj4.site} className="liveLink">Live</a><div style={{display:"inline"}} onClick={()=>setAboutToggle([aboutToggle[0],aboutToggle[1],aboutToggle[2],1])}>About</div><a  target="_blank" rel="noreferrer" href={proj4.git} className="gitLink">Git</a>
                      </div>
                  </div>
                </div>:  
                <div id="projDesc">
                <div className="projTitle">{proj4.title}</div>
                <div> {proj4.decription}</div>
                <div className="projBottom">
                    <div className="projLinks">
                      <a target="_blank" rel="noreferrer" href={proj4.site} className="liveLink">Live</a><div style={{display:"inline"}} onClick={()=>setAboutToggle([aboutToggle[0],aboutToggle[1],aboutToggle[2],0])}>About</div><a  target="_blank" rel="noreferrer" href={proj4.git} className="gitLink">Git</a>
                    </div>
                </div>
              </div>
              }</div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Splash