import React from "react"
import "./aboutMe.css"
import "./timeline/experiences/experiences.js"
import Experience from "./timeline/experiences/experiences.js";

const AboutMe = () => {
    return (
        <div className="about-me">     
            <h1 className="bokor-regular-about-me">Hi, my name is Raghu Nema.</h1>
            <h2 className="bokor-regular-about-me">I just graduated from Boston University. I need a job.</h2>
            <div>
                <Experience></Experience>
            </div>
        </div>   
    );
}

export default AboutMe;