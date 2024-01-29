import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Navbar from "../components/Navbar";
import "../style/welcome.css";

const traits = ["student", "developer", "designer", "gamer", "athlete", "hacker", "fixer", "winner","programmer", "front-end developer", "back-end developer","problem solver","googler","wizard"];

const Splash2024 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [traitcounter, setTraitCounter] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTraitCounter(cycleTraits());
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cycleTraits = () => {
    const randomIndex = Math.floor(Math.random() * traits.length);
    return randomIndex;
  };

  return (
    <div className="welcome">
      <div className="smarthighlight" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Hi, I'm <div className="welcomeName">Alex Barbosa</div>, <br />a{" "}
        <div className="traits bouncy">
          {traits[traitcounter]}
        </div>
        .
      </div>
    </div>
  );
};

export default Splash2024;
