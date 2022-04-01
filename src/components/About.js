import React from "react"
import resume from "../Lugo_Adrian_Resume.pdf"
import kitchen from "../images/kitchen.png"
import center from "../images/center.png"
import left1 from "../images/left1.png"
import left2 from "../images/left2.png"
import left3 from "../images/left3.png"
import right1 from "../images/right1.png"
import right2 from "../images/right2.png"
import right3 from "../images/right3.png"

export default function About() {
    return (
        <div className="about-container" id="about-container">
            <h1>About</h1>
            <div className="about-content">
                <p className="about-text">
                    I'm a Front End Developer located in Irving, Texas. Digital screens are my canvases and arranging pixels is my art.
                    <br /><br />
                    I am <strong>highly motivated</strong> and <strong>great in a group</strong>. I like science, coffee, and chocolate chip cookies. </p>
                <a href={resume} download>Resume</a>
                <div className="education">
                    <p>Relevant Education</p>
                    <ul>
                        <li>Scrimba's Front-End Developer Career Path</li>
                        <li>Bachelor's Degree</li>
                    </ul>
                </div>
                <div className="tech-stack">
                    <p>Tech Stack</p>
                    <ul className="tech-stack-grid">
                        <li>React</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>Git</li>
                        <li>APIs</li>
                        <li>Responsive</li>
                        <li>UI Design</li>
                        <li>Typescript</li>
                        <li>Sass</li>
                        <li>GSAP</li>
                        <li>Barba</li>
                    </ul>
                </div>
                <div className="images-container">
                    <img className="kitchen" src={kitchen} alt="a technological kitchen"></img>
                    <img className="left3" src={left3}></img>
                    <img className="right3" src={right3}></img>
                    <img className="left2" src={left2}></img>
                    <img className="right2" src={right2}></img>
                    <img className="left1" src={left1}></img>
                    <img className="right1" src={right1}></img>
                    <img className="center" src={center}></img>
                </div>
            </div>
        </div>
    )
}