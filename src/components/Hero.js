import React from "react"
import dev from "../images/dev.png"
import desk from "../images/desk.png"
import {Link} from "react-scroll"

export default function Hero() {

    return (
        <div className="hero-container">
            <p className="name">Hello, I'm Adrian</p>
            <h1 className="title">Front-End Developer</h1>
            <div className="socials">
                <a href="https://www.linkedin.com/in/adrian-lugo-820389223/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/adriansseur" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://twitter.com/adriansseur" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/channel/UCjBO_Yz33-oZygrgQmqECIg" target="_blank"><i class="fab fa-youtube"></i></a>
            </div>
            <div className="images-container">
                <img className="desk" src={desk} alt="desk"></img>
                <img className="dev" src={dev} alt="dev"></img>
            </div>
            <div className="section-links">
                <Link className="section-link" to="about-container" smooth={true} duration={1000}>About</Link>
                <Link className="section-link" to="projects-container" smooth={true} duration={1000}>Projects</Link>
                <Link className="section-link" to="contact-container" smooth={true} duration={1000}>Contact</Link>
            </div>
        </div>
    )
}