import React from "react"
import dev from "../images/dev.png"
import desk from "../images/desk.png"
import {Link} from "react-scroll"

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
                <div className="section-links">
                    <Link className="section-link" to="about-container" smooth={true} duration={1000}>About</Link>
                    <Link className="section-link" to="projects-container" smooth={true} duration={1000}>Projects</Link>
                    <Link className="section-link" to="contact-container" smooth={true} duration={1000}>Contact</Link>
                </div>
            </div>
            <div className="right">
                <img className="desk" src={desk} alt="desk"></img>
                <img className="dev" src={dev} alt="dev"></img>
            </div>
        </div>
    )
}