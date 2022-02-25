import React from "react"
import dev from "../images/dev.png"
import desk from "../images/desk.png"
import screenTopTan from "../images/screen_top_tan.png"
import screenTopBlack from "../images/screen_top_black.png"
import screenRightTan from "../images/screen_right_tan.png"
import screenRightDarkGray from "../images/screen_right_darkgray.png"
import screenRightLightGray from "../images/screen_right_lightgray.png"
import screenLeftBottom from "../images/screen_left_bottom.png"
import keyboard from "../images/keyboard.png"
import devEyebrows from "../images/dev_eyebrows.png"
import devHead from "../images/dev_head.png"
import devLeftArm from "../images/dev_leftarm.png"
import devRightArm from "../images/dev_rightarm.png"
import devBody from "../images/dev_body.png"
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
                <img className="screenTopTan" src={screenTopTan} alt="screenTopTan"></img>
                <img className="screenTopBlack" src={screenTopBlack} alt="screenTopBlack"></img>
                <img className="screenRightTan" src={screenRightTan} alt="screenRightTan"></img>
                <img className="screenRightDarkGray" src={screenRightDarkGray} alt="screenRightDarkGray"></img>
                <img className="screenRightLightGray" src={screenRightLightGray} alt="screenRightLightGray"></img>
                <img className="screenLeftBottom" src={screenLeftBottom} alt="screenLeftBottom"></img>
                <img className="devHead" src={devHead} alt="devHead"></img>
                <img className="devEyebrows" src={devEyebrows} alt="devEyebrows"></img>
                <img className="devBody" src={devBody} alt="devBody"></img>
                <img className="devLeftArm" src={devLeftArm} alt="devLeftArm"></img>
                <img className="devRightArm" src={devRightArm} alt="devRightArm"></img>
                <img className="keyboard" src={keyboard} alt="keyboard"></img>
            </div>
            <div className="section-links">
                <Link className="section-link" to="about-container" smooth={true} duration={1000}>About</Link>
                <Link className="section-link" to="projects-container" smooth={true} duration={1000}>Projects</Link>
                <Link className="section-link" to="contact-container" smooth={true} duration={1000}>Contact</Link>
            </div>
        </div>
    )
}