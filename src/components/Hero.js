import React from "react"

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="left">
                <p>Hello, I'm Adrian</p>
                <h1>Front-End Developer</h1>
                <div className="socials">
                    <a href="#">LinkedIn</a>
                    <a href="#">Github</a>
                    <a href="#">Twitter</a>
                    <a href="#">YouTube</a>
                </div>
                <div className="sections-buttons">
                    <button>About</button>
                    <button>Projects</button>
                    <button>Contact</button>
                </div>
            </div>
            <div className="right">Image</div>
        </div>
    )
}