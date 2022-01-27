import React from "react"

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
                        <input type="text" name="message" required placeholder="Message"></input>
                        <input type="hidden" name="_next" value="https://adriansseur.github.io"></input>
                        <button type="submit">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}