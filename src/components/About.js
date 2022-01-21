import React from "react"

export default function About() {
    return (
        <div className="about-container">
            <h1>About</h1>
            <div className="about-content">
                <div className="left">Image</div>
                <div className="right">
                    <p>I am highly motivated to work on building things for the web. I enjoy working with others, learning through executing, and taking responsibility for my projects. I like science, coffee, and chocolate chip cookies way too much.</p>
                    <div className="resume-container">
                        <p>Looking for this?</p>
                        <a src="#">Resume</a>
                    </div>
                    <div className="highlights-container">
                        <div className="education">Education</div>
                        <div className="tech-stack">Tech Stack</div>
                        <div className="languages">Languages</div>
                    </div>
                </div>
            </div>
        </div>
    )
}