import React from "react";

import './about.css'

const About = () => {
  return (
    <div className="about-nav">
       <div className="title-about">
        <h1 className="title">About Us </h1>
       </div>
       
    
    <div className="skills-showcase">
        
      <div className="rotating-cube">
        <div className="cube-face front">Wines</div>
        <div className="cube-face back">Cocktails</div>
        <div className="cube-face right">Beer</div>
        <div className="cube-face left">Shisha</div>
        <div className="cube-face top">whiskey</div>
        <div className="cube-face bottom">Water</div>
      </div>
    </div>
    </div>
    
  );
};



export default About