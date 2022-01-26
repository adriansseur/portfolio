import React from "react"
import kitchen from "../images/kitchen.png"

export default function About() {
    return (
        <div className="about-container" id="about-container">
            <h1>About</h1>
            <div className="about-content">
                <p className="about-text">I am highly motivated and great in a group. I like science, coffee, and chocolate chip cookies. </p>
                <a href="#">Resume</a>
                <div className="highlights-container">
                    <div className="education">
                        <p>Education</p>
                        <ul>
                            <li>Scrimba's Front-End Developer Career Path</li>
                            <li>Bachelor's Degree</li>
                        </ul>
                    </div>
                    <div className="tech-stack">
                        <p>Tech Stack</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
            </div>
            <img className="kitchen" src={kitchen} alt="a technological kitchen"></img>
        </div>
    )
}