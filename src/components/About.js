import React from "react"
import resume from "../Lugo_Adrian_Resume.pdf"
import kitchen from "../images/kitchen.png"

export default function About() {
    return (
        <div className="about-container" id="about-container">
            <h1>About</h1>
            <div className="about-content">
                <p className="about-text">I am <strong>highly motivated</strong> and <strong>great in a group</strong>. I like science, coffee, and chocolate chip cookies. </p>
                <a href={resume} download>Resume</a>
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
                        <ul className="tech-stack-grid">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Git</li>
                            <li>APIs</li>
                            <li>Responsive</li>
                            <li>UI Design</li>
                        </ul>
                    </div>
                </div>
                <div className="images-container">
                    <img className="kitchen" src={kitchen} alt="a technological kitchen"></img>
                </div>
            </div>
        </div>
    )
}