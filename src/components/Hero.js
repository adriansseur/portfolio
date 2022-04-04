import React from "react"
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
import { Link } from "react-scroll"
import {gsap} from "gsap"

export default function Hero() {

    // hero animation when page loads
    const heroTl = gsap.timeline({defaults: {duration: 1, ease: "back.inOut(3)"}})
    const heroContainer = React.useRef()
    const heroChildren = gsap.utils.selector(heroContainer)
    React.useEffect(() => {
        // animation runs only on mobile portrait
        // but if window is resized and page not refreshed, mobile landscape animates
        if (window.innerWidth < 768 && !(window.innerWidth > window.innerHeight)) {
            gsap.set(heroChildren([".name", ".title", ".socials a", ".hero-images-container", ".section-links a"]), {opacity: 0})
            heroTl
                .fromTo(heroChildren(".name"),
                    { scale: 1, y: 200, xPercent: -50 },
                    { scale: 2, xPercent: 50, opacity: 1 })
                .to(heroChildren(".name"),
                    { xPercent: 0, y: 0, scale: 1, duration: 0.5, delay: 0.5 })
                .fromTo(heroChildren(".title"),
                    { xPercent: -100 }, { xPercent: 0, duration: 0.5, opacity: 1 })
                .fromTo(heroChildren(".socials a"),
                    { y: 50 }, { y: 0, opacity: 1, stagger: 0.2 }, "<")
                .fromTo(heroChildren(".hero-images-container"),
                    { scale: 0.1 }, { scale: 1, opacity: 1 }, "<25%")
                .fromTo(heroChildren(".section-links a"),
                    { y: 100 }, { y: 0, opacity: 1, stagger: 0.2 }, "<")
        }
    }, [])

    return (
        <div ref={heroContainer} className="hero-container">
            <p className="name">Hello, I'm Adrian</p>
            <h1 className="title">Front-End Developer</h1>
            <div className="socials">
                <a href="https://www.linkedin.com/in/adrian-lugo-820389223/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/adriansseur" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://twitter.com/adriansseur" target="_blank"><i className="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/channel/UCjBO_Yz33-oZygrgQmqECIg" target="_blank"><i className="fab fa-youtube"></i></a>
            </div>
            <div className="hero-images-container">
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
                <Link to="about-container" smooth={true} duration={1000}>About</Link>
                <Link to="projects-container" smooth={true} duration={1000}>Projects</Link>
                <Link to="contact-container" smooth={true} duration={1000}>Contact</Link>
            </div>
        </div>
    )
}