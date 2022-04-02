import React from "react"
import blueBook from "../images/blueBook.png"
import booksCompu from "../images/booksCompu.png"
import devBack from "../images/devBack.png"
import leftArm from "../images/leftArm.png"
import newMessage from "../images/newMessage.png"
import redDot from "../images/redDot.png"
import rightArm from "../images/rightArm.png"
import yellowBook from "../images/yellowBook.png"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Contact() {

    // contact animation on scroll
    const contactContainer = React.useRef()
    const contactChildren = gsap.utils.selector(contactContainer)
    const contactTl = gsap.timeline({
        scrollTrigger: {
            start: "76%",
            end: "86%",
            scrub: true,
            ease: "back.inOut(3)",
            markers: true
        }
    })
    
    React.useEffect(() => {
        if (window.innerWidth < 786) {
            gsap.set(contactChildren([".contact-title", ".form", ".contact-images-container"]), { opacity: 0})
            contactTl
                .fromTo(contactChildren(".contact-title"), { x: 50 }, { x: 0, opacity: 1})
                .fromTo(contactChildren(".form"), { opacity: 0, scale: 0.1 }, { opacity: 1, scale: 1, ease: "none" })
                .fromTo(contactChildren(".contact-images-container"), {x: -50}, {x: 0, opacity: 1, delay: 1})
        }
    }, [])

    return (
        <div ref={contactContainer} className="contact-container" id="contact-container">
            <h1 className="contact-title">Contact</h1>
            <div className="form">
                <form action="https://formsubmit.co/misteralugo@gmail.com" method="POST">
                    <input  type="hidden" name="_subject" value="New Email From Porfolio!"></input>
                    <input className="form-input" type="text" name="name" required placeholder="Name"></input>
                    <input className="form-input" type="email" name="email" required placeholder="Email Address"></input>
                    <textarea className="form-message" type="text" name="message" required placeholder="Message"></textarea>
                    <button className="submit-btn" type="submit">Submit</button>
                </form>
            </div>
            <div className="contact-images-container">
                <img src={booksCompu} alt="a bookshelf and a computer desk"></img>
                <img className="new-message" src={newMessage} alt="a new message on the screen"></img>
                <img src={redDot} alt="a red dot indicating a new message"></img>
                <img className="blue-book" src={blueBook} alt="a blue book"></img>
                <img className="yellow-book" src={yellowBook} alt="a yellow book"></img>
                <img className="left-arm" src={leftArm} alt="a left arm"></img>
                <img className="right-arm" src={rightArm} alt="a right arm"></img>
                <img src={devBack} alt="the back of a web developer"></img>
            </div>
        </div>
    )
}