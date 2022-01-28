import React from "react"
import blueBook from "../images/blueBook.png"
import booksCompu from "../images/booksCompu.png"
import devBack from "../images/devBack.png"
import leftArm from "../images/leftArm.png"
import newMessage from "../images/newMessage.png"
import redDot from "../images/redDot.png"
import rightArm from "../images/rightArm.png"
import yellowBook from "../images/yellowBook.png"

export default function Contact() {
    return (
        <div className="contact-container" id="contact-container">
            <h1>Contact</h1>
            <div className="contact-content">
                <div className="form">
                    
                    <form action="https://formsubmit.co/misteralugo@gmail.com" method="POST">
                        <input type="hidden" name="_subject" value="New Email From Porfolio!"></input>
                        <input type="text" name="name" required placeholder="Name"></input>
                        <input type="email" name="email" required placeholder="Email Address"></input>
                        <textarea className="form-message" type="text" name="message" required placeholder="Message"></textarea>
                        <input type="hidden" name="_next" value="https://adriansseur.github.io"></input>
                        <button type="submit">Submit</button>
                    </form>

                </div>
            </div>
            <div className="images-container">
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